// This file contains the core logic for the application.
// It handles rendering, state management, and user interactions
// without using a framework like React.

document.addEventListener('DOMContentLoaded', () => {
  // A mapping of category keys to icon components from lucide-react
  const categoryIcons = {
      'general-data': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-check"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="m9 14 2 2 4-4"></path></svg>',
      'hard-fm': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hard-hat"><path d="M2 18V16a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2"></path><path d="M12 14v-5"></path><path d="M14.5 11.5 12 9 9.5 11.5"></path><path d="M12 2v6"></path><path d="M10 2h4"></path><path d="M21.7 13.3c-.9-.6-2.5-1.2-3.7-1.2h-11c-1.2 0-2.8.6-3.7 1.2-.7.4-.7 1.2-.2 1.7L4 16h16l1.2-1c.5-.5.5-1.3-.5-1.7Z"></path></svg>',
      'catering': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-soup"><path d="M12 21a9 3 0 1 0 0-6c-.01 0-.01 6 0 6Z"></path><path d="M12 21v-4"></path><path d="M15 15a9 3 0 1 0 0-6c-.01 0-.01 6 0 6Z"></path><path d="M8 15c-.02 0-.02 6 0 6"></path><path d="M7 17.5c.67-.67 1.25-.43 1.66-.25A4 4 0 0 1 12 16a4 4 0 0 1 2.66 1.25c.41-.18 1-.42 1.66.25"></path></svg>',
      'uniforms': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
      'helpdesk': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>',
      'security-system': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',
      'waste-management': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>',
      'fuel-system': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-fuel"><line x1="3" x2="15" y1="22" y2="22"></line><line x1="4" x2="14" y1="9" y2="9"></line><path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"></path><path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.57-1.43L18 5"></path></svg>',
      'grounds-eng': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flower-2"><path d="M12 2a5 5 0 0 1 5 5c0 .74-.15 1.45-.43 2.1L21 16l-3 3-3.1-3.1c-.65.26-1.35.4-2.1.4A5 5 0 0 1 12 2Z"></path><path d="M12 22a5 5 0 0 0-5-5c-.74 0-1.45.15-2.1.43L3 8l3-3 3.1 3.1c.65-.26 1.35-.4 2.1-.4A5 5 0 0 0 12 22Z"></path><path d="M22 12a5 5 0 0 0-5-5c-.74 0-1.45.15-2.1.43L8 3l-3 3 3.1 3.1c-.26.65-.4 1.35-.4 2.1a5 5 0 0 0 10 0Z"></path><path d="M2 12a5 5 0 0 1 5-5c.74 0 1.45.15 2.1.43L16 3l3 3-3.1 3.1c.26.65.4 1.35.4 2.1a5 5 0 0 1-10 0Z"></path><circle cx="12" cy="12" r="3"></circle></svg>',
      'snow-removal': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-snowflake"><line x1="2" x2="22" y1="12" y2="12"></line><line x1="12" x2="12" y1="2" y2="22"></line><path d="m20 16-4-4 4-4"></path><path d="m4 8 4 4-4 4"></path><path d="m16 4-4 4-4-4"></path><path d="m16 20-4-4-4 4"></path></svg>',
      'pest-control': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-check"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="m9 14 2 2 4-4"></path></svg>',
      'cleaning-mat-replacement': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-check"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="m9 14 2 2 4-4"></path></svg>',
      'fm-equipment-leasing': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-check"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="m9 14 2 2 4-4"></path></svg>'
  };

  // A mapping of category keys to display titles in both languages
  const categoryTitles = {
      'general-data': {
          en: 'General Data',
          fr: 'Informations Générales'
      },
      'hard-fm': {
          en: 'Hard FM',
          fr: 'Hard FM'
      },
      'catering': {
          en: 'Catering',
          fr: 'Restauration'
      },
      'uniforms': {
          en: 'Uniforms',
          fr: 'Uniformes'
      },
      'helpdesk': {
          en: 'Helpdesk',
          fr: 'Service d\'assistance'
      },
      'security-system': {
          en: 'Security System',
          fr: 'Système de sécurité'
      },
      'waste-management': {
          en: 'Waste Management',
          fr: 'Gestion des déchets'
      },
      'fuel-system': {
          en: 'Fuel System',
          fr: 'Système de carburant'
      },
      'grounds-eng': {
          en: 'Grounds',
          fr: 'Terrains'
      },
      'snow-removal': {
          en: 'Snow Removal',
          fr: 'Déneigement'
      },
      'pest-control': {
          en: 'Pest Control',
          fr: 'Contrôle des nuisibles'
      },
      'cleaning-mat-replacement': {
          en: 'Cleaning & Mat Replacement',
          fr: 'Nettoyage et remplacement de tapis'
      },
      'fm-equipment-leasing': {
          en: 'FM Equipment Leasing',
          fr: 'Location d\'équipement FM'
      }
  };

  // Global state
  let language = 'en';
  let selectedCategory = null;
  let savedQuestionAnswers = {};

  // Load state from localStorage on startup
  const loadState = () => {
      const savedLang = localStorage.getItem('language');
      const savedAnswers = localStorage.getItem('savedQuestionAnswers');
      if (savedLang) {
          language = savedLang;
      }
      if (savedAnswers) {
          savedQuestionAnswers = JSON.parse(savedAnswers);
      }
  };

  // Save state to localStorage
  const saveState = () => {
      localStorage.setItem('language', language);
      localStorage.setItem('savedQuestionAnswers', JSON.stringify(savedQuestionAnswers));
  };

  const root = document.getElementById('root');

  // Function to render the main application layout
  const renderApp = () => {
      root.innerHTML = `
          <header class="bg-white shadow-md p-4 sticky top-0 z-10 flex items-center justify-between">
              <h1 class="text-2xl font-bold text-gray-900">
                  ${language === 'en' ? 'Data Collection App' : 'Application de Collecte de Données'}
              </h1>
              <button id="lang-toggle" class="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200" aria-label="${language === 'en' ? 'Switch to French' : 'Passer à l\'anglais'}">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe w-6 h-6 text-gray-600"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
              </button>
          </header>
          <main id="main-content" class="container mx-auto p-4 max-w-4xl">
              <!-- Content will be rendered here -->
          </main>
          <footer class="p-4 text-center text-gray-500 text-sm">
              <p>&copy; ${new Date().getFullYear()} Data Collection App. All rights reserved.</p>
          </footer>
      `;
      document.getElementById('lang-toggle').addEventListener('click', toggleLanguage);
      renderContent();
  };

  // Function to render the main content based on state
  const renderContent = () => {
      const mainContent = document.getElementById('main-content');
      if (selectedCategory) {
          renderQuestions(mainContent);
      } else {
          renderCategoryList(mainContent);
      }
  };

  // Function to toggle language
  const toggleLanguage = () => {
      language = language === 'en' ? 'fr' : 'en';
      saveState();
      renderApp();
  };

  // Function to render the category selection screen
  const renderCategoryList = (container) => {
      container.innerHTML = `
          <h2 class="text-3xl font-extrabold text-gray-900 mb-6 text-center">
              ${language === 'en' ? 'Select a Category' : 'Sélectionnez une catégorie'}
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              ${Object.keys(categoryTitles).map(key => `
                  <button class="category-button block w-full p-6 text-center bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105" data-category-key="${key}">
                      <div class="flex flex-col items-center justify-center">
                          <div class="w-12 h-12 text-blue-600 mb-3">${categoryIcons[key]}</div>
                          <span class="text-lg font-semibold text-gray-800">${categoryTitles[key][language]}</span>
                      </div>
                  </button>
              `).join('')}
          </div>
      `;
      document.querySelectorAll('.category-button').forEach(button => {
          button.addEventListener('click', (e) => {
              const key = e.currentTarget.dataset.categoryKey;
              selectedCategory = key;
              renderContent();
          });
      });
  };

  // Function to render the questions for a selected category
  const renderQuestions = (container) => {
      const questionsData = data[language][selectedCategory] || [];
      const categoryName = categoryTitles[selectedCategory][language];
      const savedAnswers = savedQuestionAnswers[selectedCategory] || {};

      container.innerHTML = `
          <div class="flex items-center mb-6">
              <button id="back-button" class="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200" aria-label="${language === 'en' ? 'Go back to categories' : 'Retourner aux catégories'}">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
              </button>
              <h2 class="text-3xl font-extrabold text-gray-900 ml-4">${categoryName}</h2>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md space-y-6">
              ${questionsData.map((item, index) => `
                  <div class="border-b border-gray-200 pb-4">
                      <div class="font-semibold text-gray-800 mb-2">${index + 1}. ${item.question}</div>
                      ${item.comment ? `<p class="text-sm text-gray-500 mb-2 italic">(${language === 'en' ? 'Comments' : 'Commentaires'}: ${item.comment})</p>` : ''}
                      <label class="block mb-2">
                          <textarea
                              class="question-answer mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3"
                              rows="3"
                              data-index="${index}"
                              placeholder="${language === 'en' ? 'Enter your answer...' : 'Entrez votre réponse...'}"
                          >${(savedAnswers[index] && savedAnswers[index].answer) || ''}</textarea>
                      </label>
                      <label class="block">
                          <textarea
                              class="question-notes mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3"
                              rows="3"
                              data-index="${index}"
                              placeholder="${language === 'en' ? 'Add notes...' : 'Ajouter des notes...'}"
                          >${(savedAnswers[index] && savedAnswers[index].notes) || ''}</textarea>
                      </label>
                  </div>
              `).join('')}
          </div>
      `;
      document.getElementById('back-button').addEventListener('click', () => {
          selectedCategory = null;
          renderContent();
      });

      document.querySelectorAll('.question-answer, .question-notes').forEach(textarea => {
          textarea.addEventListener('input', (e) => {
              const index = e.target.dataset.index;
              const field = e.target.classList.contains('question-answer') ? 'answer' : 'notes';
              
              if (!savedQuestionAnswers[selectedCategory]) {
                  savedQuestionAnswers[selectedCategory] = {};
              }
              if (!savedQuestionAnswers[selectedCategory][index]) {
                  savedQuestionAnswers[selectedCategory][index] = { answer: '', notes: '' };
              }

              savedQuestionAnswers[selectedCategory][index][field] = e.target.value;
              saveState();
          });
      });
  };

  // Initial load
  loadState();
  renderApp();
});
