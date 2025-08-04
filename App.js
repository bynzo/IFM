import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore, doc, getDoc, addDoc, setDoc, updateDoc, deleteDoc, onSnapshot, collection, query, where, getDocs, writeBatch } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

// Global Firebase variables (provided by Canvas environment)
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : {};
const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

// Initialize Firebase
let app, db, auth, userId = null;
let isAuthReady = false;

// UI Elements
const loadingSpinner = document.getElementById('loading-spinner');
const backButton = document.getElementById('backButton');

// Views
const projectsView = document.getElementById('projects-view');
const sitesView = document.getElementById('sites-view');
const zonesView = document.getElementById('zones-view');
const servicesView = document.getElementById('services-view');
const serviceDetailView = document.getElementById('service-detail-view');

// Lists
const projectsList = document.getElementById('projectsList');
const sitesList = document.getElementById('sitesList');
const zonesList = document.getElementById('zonesList');
const servicesList = document.getElementById('servicesList');

// Buttons
const addProjectBtn = document.getElementById('addProjectBtn');
const addSiteBtn = document.getElementById('addSiteBtn');
const addZoneBtn = document.getElementById('addZoneBtn');
const addServiceBtn = document.getElementById('addServiceBtn');
const deleteServiceBtn = document.getElementById('deleteServiceBtn');

// Modals
const projectModal = document.getElementById('projectModal');
const projectModalTitle = document.getElementById('projectModalTitle');
const projectForm = document.getElementById('projectForm');
const projectNameInput = document.getElementById('projectName');
const projectClientInput = document.getElementById('projectClient');
const clientCategorySelect = document.getElementById('clientCategory');
const clientSubcategoryGroup = document.getElementById('clientSubcategoryGroup');
const clientSubcategorySelect = document.getElementById('clientSubcategory');
const cancelProjectBtn = document.getElementById('cancelProjectBtn');

const siteModal = document.getElementById('siteModal');
const siteModalTitle = document.getElementById('siteModalTitle');
const siteForm = document.getElementById('siteForm');
const siteNameInput = document.getElementById('siteName');
const siteAddressInput = document.getElementById('siteAddress');
const siteTotalSqFtInput = document.getElementById('siteTotalSqFt');
const sitePersonnelShiftsInput = document.getElementById('sitePersonnelShifts');
const siteImageInput = document.getElementById('siteImageInput'); // New site image input
const siteImagesPreview = document.getElementById('siteImagesPreview'); // New site image preview
const cancelSiteBtn = document.getElementById('cancelSiteBtn');

// Site Modal - New Maintenance Strategy Fields
const ppmRmSplitCurrentInput = document.getElementById('ppmRmSplitCurrent');
const ppmRmSplitProposedInput = document.getElementById('ppmRmSplitProposed');
const detailedSLAsInput = document.getElementById('detailedSLAs');
const clientPriorityPainPointsInput = document.getElementById('clientPriorityPainPoints');
const complianceRequirementsInput = document.getElementById('complianceRequirements');

// Site Modal - Asset Register Elements
const addAssetBtn = document.getElementById('addAssetBtn');
const assetsList = document.getElementById('assetsList');

const zoneModal = document.getElementById('zoneModal');
const zoneModalTitle = document.getElementById('zoneModalTitle');
const zoneForm = document.getElementById('zoneForm');
const zoneNameInput = document.getElementById('zoneName');
const zoneSqFtInput = document.getElementById('zoneSqFt');
const zoneFunctionSelect = document.getElementById('zoneFunction');
const zoneImageInput = document.getElementById('zoneImageInput'); // New zone image input
const zoneImagesPreview = document.getElementById('zoneImagesPreview'); // New zone image preview
const cancelZoneBtn = document.getElementById('cancelZoneBtn');

const serviceModal = document.getElementById('serviceModal');
const serviceModalTitle = document.getElementById('serviceModalTitle');
const serviceForm = document.getElementById('serviceForm');
const serviceTypeSelect = document.getElementById('serviceType');


// --- NEW CODE START ---

// Event listeners for the Project modal
addProjectBtn.addEventListener('click', () => {
    projectModal.classList.remove('hidden');
    projectModal.classList.add('flex');
});

cancelProjectBtn.addEventListener('click', () => {
    projectModal.classList.add('hidden');
    projectModal.classList.remove('flex');
});

projectModal.addEventListener('click', (event) => {
    if (event.target === projectModal) {
        projectModal.classList.add('hidden');
        projectModal.classList.remove('flex');
    }
});

// --- NEW CODE END ---