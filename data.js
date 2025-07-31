// This file contains the question data parsed from the provided CSV files.
// It is formatted as an object with 'en' and 'fr' keys for English and French questions.

export const data = {
  en: {
    'general-data': [
      {
        question: 'Scopes of work any current service levels descriptions (contracts, writeups) performing the tasks. ',
        comment: null,
      },
      {
        question: 'Baseline spend per service line complete with back up information e.g. financial detailed reports broken down to details, individual PO\'s and billing (invoice copies) with work descriptions, work order histories (with work descriptions and service tickets for the past 12 months',
        comment: null,
      },
      {
        question: 'Assets for the area (with information on the asset if possible, location, description size, model, serial number, install date, criticality, spare parts information, ',
        comment: null,
      },
      {
        question: 'Time spent by the Client team both in supervision and administration of this service line (percentage or hours)',
        comment: null,
      },
      {
        question: 'Actual Client labor and materials performing the tasks. Complete with back-up documentation (timesheets, work order information) complete with parts used',
        comment: null,
      },
      {
        question: 'Actual Contractor Labor and Materials performing the tasks complete with back up information (POS, billing c/w work description and price breakdown)',
        comment: null,
      },
      {
        question: 'Requirements for Subcontractors training and escorting to enter the site and do site work',
        comment: null,
      },
      {
        question: 'General map of the site',
        comment: null,
      },
      {
        question: 'Floor plan/ sq. ft. (AutoCAD preferred if available)',
        comment: null,
      },
      {
        question: 'Number of People on site (Client + Contractors) ',
        comment: null,
      },
      {
        question: 'Organization Chart of the site for FM services self performed and pay rates',
        comment: null,
      },
      {
        question: 'Organization Chart of the site for FM services subcontracted including number of employees and total hours worked per month (For any on site delivery of controllable service, i.e. Janitorial, Security as an example)',
        comment: null,
      },
      {
        question: 'Any Union Contracts for personnel being transferred to Equans ',
        comment: null,
      },
      {
        question: 'Opening Hours of the Site - Breakdown of hours if  the site is closed during the year',
        comment: null,
      },
      {
        question: 'Any current SLAs',
        comment: null,
      },
      {
        question: 'Any KPIs or reporting systems',
        comment: null,
      },
      {
        question: 'Change management system used at site',
        comment: null,
      },
      {
        question: 'Internet Access across the site',
        comment: null,
      },
      {
        question: 'Programs used by the Client that Equans  will interface with',
        comment: null,
      },
      {
        question: 'Quality Programs utilized ',
        comment: null,
      },
      {
        question: 'Any Call Center Requirements',
        comment: null,
      },
      {
        question: 'Changes occurred during the last year which have impact on the volumes of activities',
        comment: null,
      },
    ],
    'hard-fm': [
      {
        question: 'What are the most critical environments / equipment in the clients eyes?',
        comment: null,
      },
      {
        question: 'Is the Building Listed?',
        comment: null,
      },
      {
        question: 'Year of Construction  ? Last major refit ?',
        comment: null,
      },
      {
        question: 'General information on Construction  : Frame / Roof / Floors / walls …',
        comment: 'Please provide brief description of materials, status, volumes … and general building condition',
      },
      {
        question: 'List of assets to be maintained. List the different types of materials/areas included  and how many of each type Where information is available, indicate the condition assessment of the asset',
        comment: 'refer to SOW-SLA',
      },
      {
        question: 'Number of Plant Rooms & large individual assets',
        comment: 'Please provide brief description - number and general condition - do they look clean (Dust, footprints, smells?, sufficient ventilation?)',
      },
      {
        question: 'In case there are large distances to be covered: is-there a need for a VEHICLE? If yes, does the client have one or does-it need to be provided by Equans ?',
        comment: '□ YES  □NO If yes, specify:',
      },
      {
        question: 'PARTS STORAGE AREA: Is there a central store or are stores decentralized? Are the storages easy to access and well equipped (electricity plugs; shelves; etc.)? If the storage is central, are-there lifts that allow easy transportation of equipment?',
        comment: '□ YES  □NO If yes, specify:',
      },
      {
        question: 'Are there any in-progress projects ongoing? Clarification required for who will complete these.',
        comment: 'If so we would need to undrstand number, scale and volume of these projects. Is there an exisiting supplier in place that will complete these projects or will there be a clean break.',
      },
      {
        question: 'Is there a requirement for scientific & clinical services?',
        comment: 'If so, detailed list of equipment to be obtained.',
      },
      {
        question: 'Describe CURRENT MAINTENANCE ORGANIZATION (# of service supervisors; # of FTE / PTE;  shifts; working hours, reporting line…).',
        comment: null,
      },
      {
        question: 'Is there a call out process? Standby allowance  ?',
        comment: 'If so, please state the number of staff on call outside normal hours weekdays. If so, please state the number of staff on call during weekend.',
      },
      {
        question: 'Are there any specific qualifications required to work on site?',
        comment: '(Security Check, Safety Training, Security Training, GMP etc)',
      },
      {
        question: 'Are there any IT systems and/or CAFM / CMMS systems on site that currently manage maintenance, help desk calls and finance?',
        comment: 'Planned Maintenance: Help Desk Calls: Reactive Maintenance: Finance:',
      },
      {
        question: 'CLIENT EXPECTATIONS: Are there any best practices you like with your current contractor? Are there any improvements that could be made?',
        comment: null,
      },
      {
        question: 'CLIENT EXPECTATIONS: To the Clients knowledge; are there any gaps in the current service provision in terms skills, capabilities and competencies?',
        comment: null,
      },
      {
        question: 'Is there currently an automated energy management system in place?',
        comment: null,
      },
      {
        question: 'Is there a Energy Management System\' (ISO 50001 / ISO 14001 / ISO 18001 / ISO 9001) in place?',
        comment: null,
      },
    ],
    'catering': [
      {
        question: '• Total cash revenue generated last year in local currency',
        comment: null,
      },
      {
        question: '• Total number of breakfasts / day • Total number of lunches / day • Total number of dinner / day • Total number of suppers (night) / day',
        comment: null,
      },
      {
        question: '• Total number of hospitality services provided during last year (to understand the labour structure necessary)',
        comment: null,
      },
      {
        question: '• Indicate the number of food facilities on site / central kitchen or food prepared on site What are the opening hours per outlet ?',
        comment: '(restaurant, cafetaria, kiosk, …)',
      },
      {
        question: '• What impact do the DISTANCES / TRANSPORTATION time (i.e. between buildings or restaurants) have on food distribution?',
        comment: '□ Good □ Medium □ Bad',
      },
      {
        question: '• In case there are large distances to be covered: is-there a need for a VEHICLE? If yes, does the client have one or does-it need to be provided by Equans?',
        comment: '□ YES  □NO If yes, specify:',
      },
      {
        question: 'What impact do the CONDITION OF THE BUIlDING and KITCHEN (i.e. floors, walls, fittings, stairs) have on food production and distribution?',
        comment: '□ Good □ Medium □Bad',
      },
      {
        question: 'FOOD STORAGE AREA: •Is there a central store or are stores decentralized? •Are the storages easy to access and well equipped (electricity plugs; shelves; etc.)? •If the storage is central, are-there lifts that allow easy transportation of equipment?',
        comment: '□ Good □ Medium □ Bad',
      },
      {
        question: 'Provide the average breakdown of food sold (fresh, semi prepared, packed, …) / types of menu (number of choices, starters, desserts, …) or diets (allergens, vegetatian, ….)/ free issues',
        comment: null,
      },
      {
        question: 'Do the conventional mechanisms for the transfer of personnel apply in this case? (Annexe 7 in European Countries)? ',
        comment: '□ YES   □ NO If yes, for whom does it apply to? ',
      },
      {
        question: 'Describe CURRENT ORGANIZATION (# of service supervisors; # of FTE / PTE;  shifts; working hours, reporting line…)',
        comment: null,
      },
      {
        question: 'UNIFORMS: •Are uniforms currently provided? •And uniforms laundering ? •PPE equipemnt',
        comment: null,
      },
      {
        question: 'CLIENT EXPECTATIONS: Are there any best practices you like with your current contractor? Are there any improvements that could be made?',
        comment: null,
      },
      {
        question: 'According to you, what is the LEVEL OF SERVICE / STANDARD expected by the client?',
        comment: '□ High □ Medium □ Low',
      },
      {
        question: 'Are-there some IT SYSTEMS in use on-site to manage Food services? If yes, specify the type of systems and whether they are owned by the Client or the current Supplier.',
        comment: null,
      },
      {
        question: 'VENDING: • Incumbent Vendor? ',
        comment: 'Address if given on label Phone Number ',
      },
      {
        question: 'VENDING: • Please list with location, number and types of machines. • Precise who is the owner of each machine (Client, incumbent)',
        comment: 'You can add pictures',
      },
      {
        question: 'VENDING: • Office Coffee Solution Available in Employee Area? If Yes: • Who is the provider ? • Number of brewers • Type of brewers • Products available • types of disposables',
        comment: null,
      },
      {
        question: 'VENDING: •Water filtration or bottled water in Employee Area? If Yes: • Who is the provider ? • Quantity of machines • Disposables available',
        comment: null,
      },
      {
        question: 'VENDING: Overview cash revenue last year (Preferred data - Daily, Weekly, Monthly by machine)',
        comment: null,
      },
      {
        question: 'VENDING: • Number of hot and cold drinks + snacks  sold / year',
        comment: null,
      },
      {
        question: 'VENDING: • Leasing ? ',
        comment: '□ YES □ NO If yes, who is responsible for the leasing: • The client? • The incumbent?',
      },
    ],
    'uniforms': [
      {
        question: 'Number of people working on Uniforms and time spent working on Uniforms as a percentage or hours',
        comment: null,
      },
      {
        question: 'Number of people having any personal uniforms (and number of sets)',
        comment: null,
      },
      {
        question: 'Number and size of any walk off mats',
        comment: null,
      },
      {
        question: 'Site plan detailing delivery point for laundry & pep',
        comment: null,
      },
      {
        question: 'Uniforms inventory (# of lab coats, shirts, pants, etc.)',
        comment: null,
      },
      {
        question: 'Uniforms quality standard',
        comment: null,
      },
      {
        question: 'PPE quality standard',
        comment: null,
      },
      {
        question: 'Shift pattern from all area\'s(production, maintenance, janitorial, food and utilities)',
        comment: null,
      },
    ],
    'helpdesk': [
      {
        question: 'Organization Chart showing personnel working on Helpdesk Services with percentage of time on Helpdesk or hours',
        comment: null,
      },
      {
        question: 'Description of the current system + procedures',
        comment: null,
      },
      {
        question: 'Number of helpdesk  tickets / year (work orders)',
        comment: null,
      },
      {
        question: 'Number of hours working in helpdesk',
        comment: null,
      },
      {
        question: 'other relevant procedures for Helpdesk',
        comment: null,
      },
    ],
    'security-system': [
      {
        question: 'Aux yeux du client, quel est le BIEN ou MATERIEL avec le PLUS GROS RISQUE ?',
        comment: null,
      },
      {
        question: 'Selon vous, quelle est la PRINCIPALE FONCTION DE L\'EQUIPE DE SECURITE ? (Contrôle des accès, service aux occupants, moyen de dissuasion, Santé & Sécurité) ?',
        comment: null,
      },
      {
        question: 'En plus de votre équipe de sécurité, quelles autres MESURES SONT MISES EN OEUVRE POUR SECURISER VOS LOCAUX ? (utiliser l\'espace libre pour confirmer qui est responsable aujourd\'hui de chaque matériel - GE ou Equans)',
        comment: '□ Badges d\'accès : □ Vidéosurveillance : □ Procédures de contrôle : □ Machines à rayons X : □ Alarme anti-intrusion: □ Surveillance du parking : □ Scanner à empreintes digitales : □ Contrôle des accès/des portes : □ Logiciel de gestion des rondes : □ Sécurité électronique : □ Alarme incendie / Autres : □ Systèmes intégrés / Système de gestion du bâtiment (GTB) : □ Autres :',
      },
      {
        question: 'Y a-t-il des ZONES A HAUT RISQUE / Est-ce un site de maîtrise des dangers liés aux accidents majeurs ?',
        comment: '□ Substances dangereuses □ Process sensibles □ Autres',
      },
      {
        question: 'Le périmètre du site est-il OUVERT OU FERME / CLOTURE ?',
        comment: '□ Ouvert □ Fermé ',
      },
      {
        question: 'S\'il est clôturé, quel TYPE DE CLOTURE ET PORTES avez-vous ? ',
        comment: 'Type de Clôture : □ Grillage □ Treillis soudés □ Palissade Type de Porte :',
      },
      {
        question: 'A quelle heure les BARRIERES POUR VEHICULES sont-elles fermées ? Type de barrière de véhicule (acier, manuel, électronique, véhicule avec boucle d\'induction, barrière avec bras unique...)',
        comment: null,
      },
      {
        question: 'Y a-t-il des SORTIES PIETONNES ? Combien ?',
        comment: null,
      },
      {
        question: 'Quels INCIDENTS se sont produits au cours des 2 dernières années sur le site (exemple : vol, intrusion) ?',
        comment: null,
      },
      {
        question: 'Détaillez le SOW-SLA : - Option 1: Remplissez le SOW/SLA existant ; - Option 2: Si vous n\'avez pas de SOW/SLA, décrivez les services (en utilisant le texte libre) ; - Option 3: Remplissez le tableau ci-joint (seulement pour la sécurité, par exemple : les rôles des agents de sécurité)',
        comment: null,
      },
      {
        question: 'EQUIPEMENT ET MATERIEL : • Liste des équipements et matériel • Qui les achète / à qui appartiennent-ils / qui les utilise • Marque du/des matériel(s) - Qui gère la maintenance ?',
        comment: null,
      },
      {
        question: 'GESTION DES LIVRAISONS • Rôle de la sécurité (que doivent-ils contrôler ? Tâches administratives associées ?) • Nombre de livraisons par jour en moyenne',
        comment: null,
      },
      {
        question: 'Les mécanismes conventionnels de transfert de personnel s\'appliquent-t-ils dans le cas présent ? (Annexe 7 en France)',
        comment: '□ OUI □ NON Si oui, à qui s\'applique-t-il?',
      },
      {
        question: 'NOMBRE D\'INTERVENTIONS : Indiquer le nombre de JOURS PAR SEMAINE où les services devront être réalisés (par exemple 5, 6 ou 7)',
        comment: null,
      },
      {
        question: 'Décrire l\'ORGANISATION EN PLACE (Organigramme & Structure du Management) ',
        comment: null,
      },
      {
        question: 'NOMBRE D\'HEURES TRAVAILLEES PAR FONCTION (Manager, Superviseur, Agent;…)',
        comment: null,
      },
      {
        question: 'Confirmez le NOMBRE et la DUREE des rondes (par exemple, 8 ou 12h)',
        comment: '□ Jour : □ Nuit : □ Week-end : □ Autre :',
      },
      {
        question: 'Y a-t-il des PRIMES SPECIFIQUES pour l\'équipe de sécurité?',
        comment: null,
      },
      {
        question: 'QUALIFICATIONS: Les employés doivent-ils avoir une formation / des qualifications spécifiques?',
        comment: '□ OUI □ NON Si oui, à qui s\'applique-t-il?',
      },
      {
        question: 'ATTENTES DU CLIENT: Votre sous-traitant actuel a-t-il des meilleures pratiques que vous appréciez? Des améliorations pourraient-elles être apportées?',
        comment: null,
      },
    ],
    'waste-management': [
      {
        question: 'TYPE ET QUANTITE DE DECHETS 1. Préciser les différentes types de déchets à gérer et leur volume (L ou m3) ou poids (kg ou tonne) de chaque type de déchets par jour / mois / an Tout venant, DIB Carton, Papier, Plastiques (préciser quelle famille de plastique: PS, PET, PEHD...) Biodéchets Déchets confidentiels Déchets électroniques Déchets dangereux (avec code déchets) ... 2. Le client a-t-il prévu des changements pouvant impacter le volume de déchets produits (par ex, augmentation ou baisse de la population sur site, changement d\'activité du site, agrandissement, autre) ?',
        comment: 'OUI NON Qté Unité [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ] 2. [ ] OUI [ ] NON',
      },
      {
        question: 'TRI DES DECHETS 1. Le tri des déchets est-il réalisé ? quels sont les déchets triés? 2. Quels sont les déchets non triés qui pourraient être triés ? Exemple: gobelets, canettes, piles, toners, déchets électriques, tubes fluorescents, coupes d\'aliments, carton, papier, meubles, emballages ? 4. Y a-t-il un rachat de déchets ? Si oui, à qui sont versés les revenus correspondants ?',
        comment: '1. 2. [ ] OUI / [ ] NON',
      },
      {
        question: 'MATERIEL EN PLACE 1. Y a-t-il du matériel de gestion des déchets sur le site (par ex, benne, broyeur, compacteur, presse à balles, etc.) ? Si oui, précisez leur coût, volume, fournisseur, déchet concerné 2. Etat général du gros matériel (préciser pour chaque type de matériel) ? Qui est responsable de son entretien ?',
        comment: '1. [ ] OUI [ ] NON description: [ ] Neuf [ ] Bon [ ] Moyen [ ] Mauvais - 2. [ ] OUI [ ] NON description: 3. [ ] Neuf [ ] Bon [ ] Moyen [ ] Mauvais -',
      },
      {
        question: 'REPORTING SUIVI TRACABILITE 1.Le registre déchets est-il à la charge de Equans ? 2.En cas de gestion de déchets dangereux, les BSD sont-ils à la charge de Equans ? 3. Autres exigences en terme de déclaration annuelle ou éléments de traçabilité à la charge de Equans ?',
        comment: '1.[ ] OUI / [ ] NON 2.[ ] OUI / [ ] NON 3.',
      },
      {
        question: 'Le principe conventionnel de transfert de personnel s\'applique-t-il dans le cas présent? (Annexe 7 en France)',
        comment: '□ OUI □ NON Si oui, à qui s\'applique-t-il? ',
      },
      {
        question: 'Décrire l\'ORGANISATION EN PLACE (nb de chefs d\'équipes, nb d\'employés à temps plein / partiel, équipes, horaires de travail, affectation fixe au service ou partage avec d\'autres services, etc.). ',
        comment: null,
      },
      {
        question: 'QUALIFICATIONS: Les employés doivent-ils avoir une formation / des qualifications spécifiques: Permis CACES, formation déchets dangereux, transport ADR,...',
        comment: '□ OUI □ NON Si oui, spécifier',
      },
      {
        question: 'Tenues de travail 1. Y a-t-il besoin de tenues de travail ? 2. Si oui, sont-elles fournies par le client ?',
        comment: '1.[ ] OUI / [ ] NON 2.[ ] OUI / [ ] NON',
      },
      {
        question: 'ATTENTES DU CLIENT: Votre sous-traitant actuel a-t-il des pratiques exemplaires que vous appréciez ? Des améliorations pourraient-elles être apportées ?',
        comment: null,
      },
    ],
    'fuel-system': [
      {
        question: 'List of gas to be delivered,',
        comment: null,
      },
      {
        question: 'Frequency and volumes of delivery,',
        comment: null,
      },
      {
        question: 'Gas Consumption,',
        comment: null,
      },
    ],
    'grounds-eng': [
      {
        question: 'Specify the total area to be maintained (m²) • If possible, take a set of snapshots of the current site and ask if the customer is currently satisfied.',
        comment: '- Annual planning of services - Site map detailing areas to be treated (including quantities if possible)',
      },
      {
        question: 'Access • Is the size of the machines used limited due to access?',
        comment: '□ YES □ NO If yes, specify',
      },
      {
        question: 'INTERVENTION TIMES • Specify the possible days and hours of intervention',
        comment: null,
      },
      {
        question: 'EQUIPMENT • Who owns the equipment? • Who is responsible for the maintenance of the equipment? • Is electric equipment recommended, required? • Is there an automatic watering system?',
        comment: '- List of equipment with mileage or hours of use - Maintenance books available?',
      },
      {
        question: 'STORAGE / SECURITY • Are there suitable storage locations for the equipment? • If so, are they secure?',
        comment: '1) [ ] YES [ ] NO 2) [ ] YES [ ] NO',
      },
      {
        question: 'RISK ASSESSMENT • Are there specific risks - Slopes, water, working at height, risk of falls, dangerous trees, snow removal, fitness trail?',
        comment: '□ YES □ NO If yes, specify',
      },
      {
        question: 'SITE SPECIFICITY • Site specificities, i.e. flood zone, extreme cold, snow...?',
        comment: null,
      },
      {
        question: 'DISTANCES • Should travel times be taken into account given the size of the site? • Is an adapted vehicle necessary? • If so, is it provided by the customer?',
        comment: '□ YES □ NO If yes, specify',
      },
      {
        question: 'SUSTAINABLE DEVELOPMENT PLAN • Is there a sustainable development plan?',
        comment: '□ YES □ NO If yes, please specify',
      },
      {
        question: 'PESTICIDE • Is there a document on the use of pesticides? • Is there a register of pesticides detailing the quantities, where they are stored?',
        comment: '1) [ ] YES [ ] NO 2) [ ] YES [ ] NO',
      },
      {
        question: 'WASTE • How is green waste managed on the site?',
        comment: '- Are there any restrictions on the quantities of green waste or effluent discharges?',
      },
      {
        question: 'INDOOR GREEN SPACES • Subcontracted or owned? • Contract available? • Who owns the plants and containers? • Are there schedules for houseplant care? • Type of plants / maintenance frequency',
        comment: '- Description of indoor plants - Number of plants',
      },
      {
        question: 'MAINTENANCE OF THE HEALTH TRAIL • Synthetic turf: Is there a specific contract? • Who is responsible for the maintenance of the health trail?',
        comment: '□ YES □ NO If yes, please specify',
      },
      {
        question: 'Is there a plan to take over staff?',
        comment: '□ YES □ NO If yes, please specify',
      },
      {
        question: 'Indicate the number of days per week that the green space service must be provided (5, 6 or 7)',
        comment: null,
      },
      {
        question: 'Describe the current organization. (Number of team leaders, number of agents, number of hours worked, etc.).',
        comment: null,
      },
      {
        question: 'QUALIFICATIONS: Are there any special qualifications to have?',
        comment: '□ YES □ NO If yes, please specify',
      },
    ],
    'snow-removal': [
      {
        question: 'Site personnel hours worked on Snow Removal last year or a percentage of time for the person,',
        comment: null,
      },
      {
        question: 'Snow removal requirements and area (AutoCAD drawing preferred),',
        comment: null,
      },
    ],
    'pest-control': [
      {
        question: 'Pest control schedules and volumes of devices (Contract),',
        comment: null,
      },
      {
        question: 'Site personnel working on Pest Control with percentage of their time or hours,',
        comment: null,
      },
    ],
    'cleaning-mat-replacement': [
      {
        question: 'CLEANING STORAGE ROOM: Is there a centralized room or are the rooms relocated? Are the premises easily accessible and well equipped (electrical outlets, shelves, etc.)? If the room is centralized, are there elevators to facilitate the transportation of equipment? ',
        comment: null,
      },
      {
        question: 'Site Map,',
        comment: null,
      },
      {
        question: 'Cleanable sqft,',
        comment: null,
      },
      {
        question: 'Cleaning frequencies,',
        comment: null,
      },
      {
        question: 'What are the controbale and non controbales spent,',
        comment: null,
      },
      {
        question: 'What are the periodicale cleaning tasks and their frequencies,',
        comment: null,
      },
      {
        question: 'Is there any critical zone to clean? Is there any specific SOP,',
        comment: null,
      },
      {
        question: 'CONSUMABLES: • Can you get a list of all sanitary consumables? • Who buys/implements them? • Which brands/product references?: ',
        comment: '□ Toilet paper □ Paper towels □ Textile hand towels □ Feminine hygiene containers □ Hand soap □ Hand sanitizer □ Hand Cream □ Air fresheners',
      },
      {
        question: 'EQUIPMENT AND MATERIALS: • Can you get a list of all the equipment and materials? • Who buys/holds/uses them? • Which brands/product references?',
        comment: null,
      },
      {
        question: 'GLASS CLEANING: What is the surface of the glazing to be cleaned: • The entrance hall? • Glass partitions (height/width of windows)? • Accessible interior glazing? • Accessible exterior glazing? Is the cleaning of inaccessible glass (interior/exterior) (outside of man\'s height) included in the perimeter? If so, specify the surface area and the means of elevation (pole, boom lift, spider, roof lift, light truck/HGV boom lift, etc.) necessary to carry out the service and who provides it (customer equipment, equipment to rent/buy). If it is mountaineering glazing, also specify the number of anchor points. / • Specify the number of sides of the glazing to be cleaned',
        comment: null,
      },
      {
        question: 'WASTE COLLECTION/SORTING (1/2): - Are there centralised collection points or are they individual bins? - Is there a specific selective sorting procedure in place? - Indicate the size/caliber of the garbage bags',
        comment: null,
      },
      {
        question: 'WASTE COLLECTION/SORTING (2/2): Is Equans in charge of: - The collection and sorting of hazardous and non-hazardous waste? - From evacuation to the appropriate room and storage? - Management of waste disposal service providers (treatment/recycling)?',
        comment: null,
      },
      {
        question: 'ENTRANCE MAT: • How often are they changed (rotation)? • Specify the number and dimensions of the mats',
        comment: null,
      },
      {
        question: 'Do conventional personnel transfer mechanisms apply in this case? (Bill7 in Ontario),',
        comment: null,
      },
      {
        question: 'Describe the ORGANIZATION IN PLACE (number of team leaders, number of full-time/part-time employees, teams, work schedules, reporting relationships, etc.). How many times a day do the cleaners intervene?',
        comment: null,
      },
    ],
  },
  fr: {
    'general-data': [
      {
        question: 'Portée des travaux : toutes les descriptions des niveaux de service actuels (contrats, rédactions) effectuant les tâches.',
        comment: null,
      },
      {
        question: 'Dépenses de référence par ligne de service avec informations de sauvegarde, par exemple rapports financiers détaillés ventilés en détails, bons de commande individuels et facturation (copies de factures) avec descriptions de travail, historiques des bons de travail (avec descriptions de travail et tickets de service des 12 derniers mois',
        comment: null,
      },
      {
        question: 'Actifs pour la zone (avec des informations sur l’actif si possible, emplacement, description, taille, modèle, numéro de série, date d’installation, criticité, informations sur les pièces de rechange,',
        comment: null,
      },
      {
        question: 'Temps consacré par l’équipe du client à la fois à la supervision et à l’administration de cette ligne de service (pourcentage ou heures)',
        comment: null,
      },
      {
        question: 'Main-d’œuvre et matériaux réels du client effectuant les tâches. Complet avec documentation de sauvegarde (feuilles de temps, informations sur le bon de travail) avec les pièces utilisées',
        comment: null,
      },
      {
        question: 'La main-d’œuvre et les matériaux réels de l’entrepreneur effectuant les tâches avec des informations de sauvegarde (point de vente, facturation, description du travail et ventilation des prix)',
        comment: null,
      },
      {
        question: 'Exigences relatives à la formation et à l’accompagnement des sous-traitants pour entrer sur le site et effectuer les travaux sur le site',
        comment: null,
      },
      {
        question: 'Plan général du site',
        comment: null,
      },
      {
        question: 'Plan d’étage/pi² (AutoCAD de préférence si disponible)',
        comment: null,
      },
      {
        question: 'Nombre de personnes sur place (Client + Entrepreneurs)',
        comment: null,
      },
      {
        question: 'Organigramme du site pour les services FM auto-exécutés et les taux de rémunération',
        comment: null,
      },
      {
        question: 'Organigramme du site pour les services FM sous-traités, y compris le nombre d’employés et le nombre total d’heures travaillées par mois (pour toute prestation sur site d’un service contrôlable, c’est-à-dire conciergerie, sécurité à titre d’exemple)',
        comment: null,
      },
      {
        question: 'Tout contrat syndical pour le personnel transféré à Equans',
        comment: null,
      },
      {
        question: 'Horaires d’ouverture du site - Répartition des horaires si le site est fermé en cours d’année',
        comment: null,
      },
      {
        question: 'Tous les SLA en cours',
        comment: null,
      },
      {
        question: 'Tous les KPI ou systèmes de reporting',
        comment: null,
      },
      {
        question: 'Système de gestion des changements utilisé sur site',
        comment: null,
      },
      {
        question: 'Accès Internet sur l’ensemble du site',
        comment: null,
      },
      {
        question: 'Programmes utilisés par le Client avec lesquels Equans s’interfacera',
        comment: null,
      },
      {
        question: 'Programmes de qualité utilisés',
        comment: null,
      },
      {
        question: 'Toutes les exigences du centre d’appels',
        comment: null,
      },
      {
        question: 'Des changements sont survenus au cours de la dernière année qui ont eu un impact sur les volumes d’activités',
        comment: null,
      },
    ],
    'hard-fm': [
      {
        question: 'Quels sont les environnements/équipements les plus critiques aux yeux des clients ?',
        comment: null,
      },
      {
        question: 'Le bâtiment est-il classé ?',
        comment: null,
      },
      {
        question: 'Année de construction ? Dernier grand refit ?',
        comment: null,
      },
      {
        question: 'Informations générales sur la construction : Charpente / Toit / Planchers / Murs...',
        comment: 'Veuillez fournir une brève description des matériaux, de l’état, des volumes... et l’état général du bâtiment',
      },
      {
        question: 'Liste des actifs à tenir. Énumérez les différents types de matériaux/zones inclus et combien de chaque type Lorsque l’information est disponible, indiquez l’évaluation de l’état du bien',
        comment: null,
      },
      {
        question: 'Nombre de locaux techniques et d’actifs individuels de grande taille',
        comment: 'Veuillez fournir une brève description - numéro et état général - ont-ils l’air propres (poussière, empreintes de pas, odeurs ?, ventilation suffisante ?)',
      },
      {
        question: 'Dans le cas où il y a de grandes distances à parcourir : y a-t-il besoin d’un VÉHICULE ? Si oui, le client en a-t-il un ou doit-il être fourni par Equans ?',
        comment: '□ OUI □NON Si oui, précisez :',
      },
      {
        question: 'ZONE DE STOCKAGE DES PIÈCES : Y a-t-il un magasin central ou les magasins sont-ils décentralisés ? Les rangements sont-ils faciles d’accès et bien équipés (prises électriques, étagères, etc.) ? Si le stockage est central, y a-t-il des ascenseurs qui permettent le transport facile de l’équipement ?',
        comment: '□ OUI □NON Si oui, précisez :',
      },
      {
        question: 'Y a-t-il des projets en cours ? Clarification requise pour savoir qui les réalisera.',
        comment: 'Si c\'est le cas, nous devrons comprendre le nombre, l\'ampleur et le volume de ces projets. Y a-t-il un fournisseur existant qui réalisera ces projets ou y aura-t-il une rupture nette ?',
      },
      {
        question: 'Y a-t-il un besoin pour des services scientifiques et cliniques ?',
        comment: 'Si oui, liste détaillée des équipements à obtenir.',
      },
      {
        question: 'Décrire l’ORGANISATION ACTUELLE DE LA MAINTENANCE (# de superviseurs de service ; # d’ETP / PTE ; Changements; heures de travail, ligne de rapport...).',
        comment: null,
      },
      {
        question: 'Y a-t-il un processus d’appel ? Indemnité de disponibilité ?',
        comment: 'Si c’est le cas, veuillez indiquer le nombre d’employés sur appel en dehors des heures normales de travail. Si oui, veuillez indiquer le nombre d’employés disponibles pendant le week-end.',
      },
      {
        question: 'Y a-t-il des qualifications spécifiques requises pour travailler sur site ?',
        comment: '(Contrôle de sécurité, formation à la sûreté, formation à la sécurité, GMP, etc.)',
      },
      {
        question: 'Y a-t-il des systèmes informatiques et/ou des systèmes CAFM / GMAO sur site qui gèrent actuellement la maintenance, les appels au service d’assistance et les finances ?',
        comment: 'Maintenance planifiée : Appels au service d’assistance : Maintenance réactive : Finance:',
      },
      {
        question: 'ATTENTES DU CLIENT : Y a-t-il des pratiques exemplaires que vous aimez avec votre entrepreneur actuel ? Y a-t-il des améliorations qui pourraient être apportées ?',
        comment: null,
      },
      {
        question: 'ATTENTES DU CLIENT : À la connaissance du Client ; Y a-t-il des lacunes dans l’offre actuelle de services en termes d’aptitudes, d’aptitudes et de compétences ?',
        comment: null,
      },
      {
        question: 'Existe-t-il actuellement un système automatisé de gestion de l’énergie ?',
        comment: null,
      },
      {
        question: 'Existe-t-il un système de management de l’énergie...',
        comment: null,
      },
    ],
    'catering': [
      {
        question: '• Total des revenus en espèces générés l’année dernière en monnaie locale',
        comment: null,
      },
      {
        question: '• Nombre total de petits déjeuners / jour • Nombre total de déjeuners / jour • Nombre total de dîners / jour • Nombre total de soupers (soir) / jour',
        comment: null,
      },
      {
        question: '• Nombre total de services d’accueil fournis au cours de l’année écoulée (pour comprendre la structure de la main-d’œuvre nécessaire)',
        comment: null,
      },
      {
        question: '• Indiquez le nombre d’installations alimentaires sur place / cuisine centrale ou de nourriture préparée sur place Quelles sont les heures d’ouverture par point de vente ?',
        comment: '(restaurant, cafétéria, kiosque, ...)',
      },
      {
        question: '• Quel impact les DISTANCES / TEMPS DE TRANSPORT (c’est-à-dire entre les bâtiments ou les restaurants) ont-ils sur la distribution des aliments ?',
        comment: '□ Bien □ Moyen □ Mauvais',
      },
      {
        question: '• En cas de grandes distances à parcourir : y a-t-il besoin d’un VÉHICULE ? Si oui, le client en a-t-il un ou doit-il être fourni par Equans?',
        comment: '□ OUI □ NO Si oui, précisez ',
      },
      {
        question: 'Quel est l’impact de l’état de la cuisine et de la cuisine (sols, murs, installations, escaliers) sur la production et la distribution des aliments ?',
        comment: '□ Bien □ Moyen □ Mauvais',
      },
      {
        question: 'ZONE DE STOCKAGE DES ALIMENTS : •Y a-t-il un magasin central ou les magasins sont-ils décentralisés ? •Les rangements sont-ils faciles d’accès et bien équipés (prises électriques, étagères, etc.) ? •Si le stockage est central, y a-t-il des ascenseurs qui permettent le transport facile de l’équipement ?',
        comment: '□ Bien □ Moyen □ Mauvais',
      },
      {
        question: 'Fournir la ventilation moyenne des aliments vendus (frais, semi-préparés, emballés, ...) / types de menu (nombre de choix, entrées, desserts, ...) ou régimes (allergènes, végétarien, ....) / numéros gratuits',
        comment: null,
      },
      {
        question: 'Les mécanismes conventionnels de transfert de personnel s’appliquent-t-ils dans le cas présent ? (Annexe 7 dans les pays européens) ? ',
        comment: '□ OUI □ NON Si oui, à qui cela s\'applique-t-il ? ',
      },
      {
        question: 'Décrire l\'ORGANISATION ACTUELLE (# de superviseurs de service ; # d\'ETP / PTE ; quarts de travail ; heures de travail, ligne hiérarchique...)',
        comment: null,
      },
      {
        question: 'UNIFORMES : •Des uniformes sont-ils actuellement fournis ? •Et le lavage des uniformes ? •Equipemnt EPI',
        comment: null,
      },
      {
        question: 'ATTENTES DU CLIENT : Y a-t-il des pratiques exemplaires que vous aimez avec votre entrepreneur actuel ? Y a-t-il des améliorations qui pourraient être apportées ?',
        comment: null,
      },
      {
        question: 'Selon vous, quel est le NIVEAU DE SERVICE / STANDARD attendu par le client ?',
        comment: '□ Bien □ Moyen □ Mauvais',
      },
      {
        question: 'Y a-t-il des SYSTÈMES informatiques utilisés sur place pour gérer les services de restauration ? Si oui, précisez le type de systèmes et s’ils appartiennent au Client ou au Fournisseur actuel.',
        comment: null,
      },
      {
        question: 'DISTRIBUTEUR: • Fournisseur en place ?',
        comment: 'Adresse si elle est indiquée sur l’étiquette Numéro de téléphone',
      },
      {
        question: 'DISTRIBUTEUR: • Veuillez indiquer l’emplacement, le nombre et les types de machines. • Préciser qui est le propriétaire de chaque machine (Client, titulaire)',
        comment: 'Vous pouvez ajouter des photos',
      },
      {
        question: 'DISTRIBUTEUR: • Solution de café de bureau disponible dans l’espace des employés ? Si oui : • Qui est le prestataire ? • Nombre d’infuseurs • Type d’infuseurs • Produits disponibles • Types de produits jetables',
        comment: null,
      },
      {
        question: 'DISTRIBUTEUR: •Filtration de l’eau ou eau embouteillée dans la zone des employés ? Si oui : • Qui est le prestataire ? • Quantité de machines • Consommables disponibles',
        comment: null,
      },
      {
        question: 'DISTRIBUTEUR: Vue d’ensemble des revenus en espèces de l’année dernière (données préférées - Quotidien, Hebdomadaire, Mensuel par machine)',
        comment: null,
      },
      {
        question: 'DISTRIBUTEUR: • Nombre de boissons chaudes et froides + snacks vendus / an',
        comment: null,
      },
      {
        question: 'DISTRIBUTEUR: • Location ?',
        comment: '□ OUI □ NON Si oui, qui est responsable de la location: • Le client? • Le titulaire?',
      },
    ],
    'uniforms': [
      {
        question: 'Nombre de personnes travaillant sur les uniformes et temps consacré à travailler sur les uniformes en pourcentage ou en heures',
        comment: null,
      },
      {
        question: 'Nombre de personnes portant des uniformes personnels (et nombre d’ensembles)',
        comment: null,
      },
      {
        question: 'Nombre et taille des tapis de marche',
        comment: null,
      },
      {
        question: 'Plan de site détaillant le point de livraison pour la blanchisserie et le pep',
        comment: null,
      },
      {
        question: 'Inventaire des uniformes (# de blouses de laboratoire, chemises, pantalons, etc.)',
        comment: null,
      },
      {
        question: 'Norme de qualité des uniformes',
        comment: null,
      },
      {
        question: 'Norme de qualité EPI',
        comment: null,
      },
      {
        question: 'Schéma de travail de tous les secteurs (production, entretien, conciergerie, alimentation et services publics)',
        comment: null,
      },
    ],
    'helpdesk': [
      {
        question: 'Organigramme montrant le personnel travaillant sur les services d’assistance avec le pourcentage de temps passé sur le service d’assistance ou les heures',
        comment: null,
      },
      {
        question: 'Description du système actuel + procédures',
        comment: null,
      },
      {
        question: 'Nombre de tickets d’assistance / an (ordres de travail)',
        comment: null,
      },
      {
        question: 'Nombre d’heures de travail au service d’assistance',
        comment: null,
      },
      {
        question: 'autres procédures pertinentes pour le service d’assistance',
        comment: null,
      },
    ],
    'security-system': [
      {
        question: 'Aux yeux du client, quel est le BIEN ou MATERIEL avec le PLUS GROS RISQUE ?',
        comment: null,
      },
      {
        question: 'Selon vous, quelle est la PRINCIPALE FONCTION DE L\'EQUIPE DE SECURITE ? (Contrôle des accès, service aux occupants, moyen de dissuasion, Santé & Sécurité) ?',
        comment: null,
      },
      {
        question: 'En plus de votre équipe de sécurité, quelles autres MESURES SONT MISES EN OEUVRE POUR SECURISER VOS LOCAUX ? (utiliser l\'espace libre pour confirmer qui est responsable aujourd\'hui de chaque matériel - GE ou Equans)',
        comment: '□ Badges d\'accès : □ Vidéosurveillance : □ Procédures de contrôle : □ Machines à rayons X : □ Alarme anti-intrusion: □ Surveillance du parking : □ Scanner à empreintes digitales : □ Contrôle des accès/des portes : □ Logiciel de gestion des rondes : □ Sécurité électronique : □ Alarme incendie / Autres : □ Systèmes intégrés / Système de gestion du bâtiment (GTB) : □ Autres :',
      },
      {
        question: 'Y a-t-il des ZONES A HAUT RISQUE / Est-ce un site de maîtrise des dangers liés aux accidents majeurs ?',
        comment: '□ Substances dangereuses □ Process sensibles □ Autres',
      },
      {
        question: 'Le périmètre du site est-il OUVERT OU FERME / CLOTURE ?',
        comment: '□ Ouvert □ Fermé ',
      },
      {
        question: 'S\'il est clôturé, quel TYPE DE CLOTURE ET PORTES avez-vous ? ',
        comment: 'Type de Clôture : □ Grillage □ Treillis soudés □ Palissade Type de Porte :',
      },
      {
        question: 'A quelle heure les BARRIERES POUR VEHICULES sont-elles fermées ? Type de barrière de véhicule (acier, manuel, électronique, véhicule avec boucle d\'induction, barrière avec bras unique...)',
        comment: null,
      },
      {
        question: 'Y a-t-il des SORTIES PIETONNES ? Combien ?',
        comment: null,
      },
      {
        question: 'Quels INCIDENTS se sont produits au cours des 2 dernières années sur le site (exemple : vol, intrusion) ?',
        comment: null,
      },
      {
        question: 'Détaillez le SOW-SLA : - Option 1: Remplissez le SOW/SLA existant ; - Option 2: Si vous n\'avez pas de SOW/SLA, décrivez les services (en utilisant le texte libre) ; - Option 3: Remplissez le tableau ci-joint (seulement pour la sécurité, par exemple : les rôles des agents de sécurité)',
        comment: null,
      },
      {
        question: 'EQUIPEMENT ET MATERIEL : • Liste des équipements et matériel • Qui les achète / à qui appartiennent-ils / qui les utilise • Marque du/des matériel(s) - Qui gère la maintenance ?',
        comment: null,
      },
      {
        question: 'GESTION DES LIVRAISONS • Rôle de la sécurité (que doivent-ils contrôler ? Tâches administratives associées ?) • Nombre de livraisons par jour en moyenne',
        comment: null,
      },
      {
        question: 'Les mécanismes conventionnels de transfert de personnel s\'appliquent-t-ils dans le cas présent ? (Annexe 7 en France)',
        comment: '□ OUI □ NON Si oui, à qui s\'applique-t-il?',
      },
      {
        question: 'NOMBRE D\'INTERVENTIONS : Indiquer le nombre de JOURS PAR SEMAINE où les services devront être réalisés (par exemple 5, 6 ou 7)',
        comment: null,
      },
      {
        question: 'Décrire l\'ORGANISATION EN PLACE (Organigramme & Structure du Management) ',
        comment: null,
      },
      {
        question: 'NOMBRE D\'HEURES TRAVAILLEES PAR FONCTION (Manager, Superviseur, Agent;…)',
        comment: null,
      },
      {
        question: 'Confirmez le NOMBRE et la DUREE des rondes (par exemple, 8 ou 12h)',
        comment: '□ Jour : □ Nuit : □ Week-end : □ Autre :',
      },
      {
        question: 'Y a-t-il des PRIMES SPECIFIQUES pour l\'équipe de sécurité?',
        comment: null,
      },
      {
        question: 'QUALIFICATIONS: Les employés doivent-ils avoir une formation / des qualifications spécifiques?',
        comment: '□ OUI □ NON Si oui, à qui s\'applique-t-il?',
      },
      {
        question: 'ATTENTES DU CLIENT: Votre sous-traitant actuel a-t-il des meilleures pratiques que vous appréciez? Des améliorations pourraient-elles être apportées?',
        comment: null,
      },
    ],
    'waste-management': [
      {
        question: 'TYPE ET QUANTITE DE DECHETS 1. Préciser les différentes types de déchets à gérer et leur volume (L ou m3) ou poids (kg ou tonne) de chaque type de déchets par jour / mois / an Tout venant, DIB Carton, Papier, Plastiques (préciser quelle famille de plastique: PS, PET, PEHD...) Biodéchets Déchets confidentiels Déchets électroniques Déchets dangereux (avec code déchets) ... 2. Le client a-t-il prévu des changements pouvant impacter le volume de déchets produits (par ex, augmentation ou baisse de la population sur site, changement d\'activité du site, agrandissement, autre) ?',
        comment: 'OUI NON Qté Unité [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ] 2. [ ] OUI [ ] NON',
      },
      {
        question: 'TRI DES DECHETS 1. Le tri des déchets est-il réalisé ? quels sont les déchets triés? 2. Quels sont les déchets non triés qui pourraient être triés ? Exemple: gobelets, canettes, piles, toners, déchets électriques, tubes fluorescents, coupes d\'aliments, carton, papier, meubles, emballages ? 4. Y a-t-il un rachat de déchets ? Si oui, à qui sont versés les revenus correspondants ?',
        comment: '1. 2. [ ] OUI / [ ] NON',
      },
      {
        question: 'MATERIEL EN PLACE 1. Y a-t-il du matériel de gestion des déchets sur le site (par ex, benne, broyeur, compacteur, presse à balles, etc.) ? Si oui, précisez leur coût, volume, fournisseur, déchet concerné 2. Etat général du gros matériel (préciser pour chaque type de matériel) ? Qui est responsable de son entretien ?',
        comment: '1. [ ] OUI [ ] NON description: [ ] Neuf [ ] Bon [ ] Moyen [ ] Mauvais - 2. [ ] OUI [ ] NON description: 3. [ ] Neuf [ ] Bon [ ] Moyen [ ] Mauvais -',
      },
      {
        question: 'REPORTING SUIVI TRACABILITE 1.Le registre déchets est-il à la charge de Equans ? 2.En cas de gestion de déchets dangereux, les BSD sont-ils à la charge de Equans ? 3. Autres exigences en terme de déclaration annuelle ou éléments de traçabilité à la charge de Equans ?',
        comment: '1.[ ] OUI / [ ] NON 2.[ ] OUI / [ ] NON 3.',
      },
      {
        question: 'Le principe conventionnel de transfert de personnel s\'applique-t-il dans le cas présent? (Annexe 7 en France)',
        comment: '□ OUI □ NON Si oui, à qui s\'applique-t-il? ',
      },
      {
        question: 'Décrire l\'ORGANISATION EN PLACE (nb de chefs d\'équipes, nb d\'employés à temps plein / partiel, équipes, horaires de travail, affectation fixe au service ou partage avec d\'autres services, etc.). ',
        comment: null,
      },
      {
        question: 'QUALIFICATIONS: Les employés doivent-ils avoir une formation / des qualifications spécifiques: Permis CACES, formation déchets dangereux, transport ADR,...',
        comment: '□ OUI □ NON Si oui, spécifier',
      },
      {
        question: 'Tenues de travail 1. Y a-t-il besoin de tenues de travail ? 2. Si oui, sont-elles fournies par le client ?',
        comment: '1.[ ] OUI / [ ] NON 2.[ ] OUI / [ ] NON',
      },
      {
        question: 'ATTENTES DU CLIENT: Votre sous-traitant actuel a-t-il des pratiques exemplaires que vous appréciez ? Des améliorations pourraient-elles être apportées ?',
        comment: null,
      },
    ],
    'fuel-system': [
      {
        question: 'Liste des gaz à livrer,',
        comment: null,
      },
      {
        question: 'Fréquence et volumes de livraison,',
        comment: null,
      },
      {
        question: 'Consommation de gaz,',
        comment: null,
      },
    ],
    'grounds-eng': [
      {
        question: 'Précisez la surface totale à entretenir (m²) • Prenez si possible un ensemble de clichés du site actuel et demandez si le client est actuellement satisfait.',
        comment: '- Planning annuel des prestations - Plan du site détaillant les zones à traiter (incluant les quantités si possible)',
      },
      {
        question: 'ACCES • La taille des machines utilisées est-elle limitée compte tenu des accès ?',
        comment: '□ OUI □ NON Si oui, précisez',
      },
      {
        question: 'HORAIRES D\'INTERVENTION • Précisez les jours et heures possibles d\'intervention',
        comment: null,
      },
      {
        question: 'EQUIPEMENTS • A qui appartiennent les équipements ? • Qui est responsable de la maintenance du matériel ? • Le matériel électrique est-il conseillé, imposé ? • Existe-t-il un arrosage automatique ?',
        comment: '- Liste des équipements avec kilométrage ou heures d\'utilisation - Livrets d\'entretien disponibles ?',
      },
      {
        question: 'STOCKAGE / SECURITE • Existe-t-il des lieux de stockage adaptés pour le matériel ? • Si oui, sont-ils sécurisés ?',
        comment: '1) [ ] OUI [ ] NON 2) [ ] OUI [ ] NON',
      },
      {
        question: 'EVALUATION DES RISQUES • Existe-t-il des risques spécifiques - Pentes, eau, travail en hauteur, risque de chutes, arbres dangereux, déneigement, parcours santé ?',
        comment: '□ OUI □ NON Si oui, précisez',
      },
      {
        question: 'SPECIFICITE DU SITE • Spécificités du site, c’est-à-dire zone inondable, froid extrême, neige...?',
        comment: null,
      },
      {
        question: 'DISTANCES • Les temps de trajet doivent-ils être pris en compte compte tenu de la taille du site ? • Un véhicule adapté est-il nécessaire ? • Si oui, est-il fourni par le client ?',
        comment: '□ OUI □ NON Si oui, précisez',
      },
      {
        question: 'PLAN DE DEVELOPPEMENT DURABLE • Existe-t-il un plan de développement durable ?',
        comment: ' [ ] OUI [ ] NON Si oui, précisez',
      },
      {
        question: 'PESTICIDE • Existe-t-il un document concernant l\'utilisation des pesticides ? • Existe-t-il un registre des pesticides détaillant les quantités, lieu de stockage',
        comment: '1) [ ] OUI [ ] NON 2) [ ] OUI [ ] NON',
      },
      {
        question: 'DECHETS • Comment sont gérés les déchets verts sur le site ?',
        comment: '- Existe-t-il des restrictions sur les quantités de déchets verts ou rejets d\'effluents ?',
      },
      {
        question: 'ESPACES VERTS INTERIEURS • Sous-traité ou en propre ? • Contrat disponible ? • Qui est propriétaire des plantes et des bacs ? • Y\'a-t-il des horaires pour l\'entretien des plantes d\'intérieur ? • Type de plantes / fréquence d\'entretien',
        comment: '- Description des plantes intérieures - Nombre de plantes',
      },
      {
        question: 'ENTRETIEN DU PARCOURS DE SANTE • Gazon synthétique : Y\'a-t-il un contrat spécifique ? • Qui a la responsabilité de la maintenance du parcours de santé ?',
        comment: ' [ ] OUI [ ] NON Si oui, précisez',
      },
      {
        question: 'Une reprise de personnel est-elle prévue ?',
        comment: '□ OUI □ NO Si oui, précisez ',
      },
      {
        question: 'Indiquez le nombre de jours par semaine où la prestation espaces verts doit être assurée (5, 6 ou 7)',
        comment: null,
      },
      {
        question: 'Décrivez l\'organisation actuelle. (Nombre de chefs d\'équipe, nombre d\'agents, nombre d\'heures travaillées, etc.).',
        comment: null,
      },
      {
        question: 'QUALIFICATIONS: Y a-t-il des qualifications spéciales à avoir?',
        comment: '□ OUI □ NON Si oui, précisez',
      },
    ],
    'snow-removal': [
      {
        question: 'Heures travaillées par le personnel sur le chantier pour le déneigement l’année dernière ou un pourcentage du temps pour la personne,',
        comment: null,
      },
      {
        question: 'Exigences et zone de déneigement (dessin AutoCAD de préférence),',
        comment: null,
      },
    ],
    'pest-control': [
      {
        question: 'Calendrier de lutte antiparasitaire et volumes des dispositifs (Contrat),',
        comment: null,
      },
      {
        question: 'Personnel du site travaillant à la lutte antiparasitaire avec le pourcentage de leur temps ou d\'heures,',
        comment: null,
      },
    ],
    'cleaning-mat-replacement': [
      {
        question: 'LOCAL DE STOCKAGE DE NETTOYAGE: Existe-t-il un local centralisé ou les locaux sont-ils délocalisés? Les locaux sont-ils faciles d\'accès et bien équipés (prises d\'électricité, étagères, etc.)? Si le local est centralisé, y a-t-il des ascenseurs pour faciliter le transport de l\'équipement?',
        comment: null,
      },
      {
        question: 'Plan du site,',
        comment: null,
      },
      {
        question: 'Superficie nettoyable,',
        comment: null,
      },
      {
        question: 'Frequence de nettoyage,',
        comment: null,
      },
      {
        question: 'Quels sont les prestations inclus dans les depenses controllables, et non controlable',
        comment: null,
      },
      {
        question: 'Quel sont les prestation periodiques et leur frequences,',
        comment: null,
      },
      {
        question: '- ""ZONES CRITIQUES"" à nettoyer avec des exigences de nettoyage spécifiques? - Toute autre procédure spécifique existante du site?',
        comment: null,
      },
      {
        question: 'CONSOMMABLES: • Pouvez-vous obtenir la liste de tous les consommables sanitaires? • Qui les achète / les met en place? • Quelles marques / références de produit?',
        comment: '□ Papier hygiénique □ Essuie-mains papiers □ Essuie-mains textiles □ Conteneurs d\'hygiène féminine □ Savon pour les mains □ Désinfectant pour les mains □ Crème pour les mains □ Assainisseurs d\'air',
      },
      {
        question: 'ÉQUIPEMENT ET MATÉRIEL: • Pouvez-vous obtenir la liste de tous les équipement et matériels? • Qui les achète / les détient / les utilise? • Quelles marques / références de produit?',
        comment: null,
      },
      {
        question: 'NETTOYAGE DE LA VITRERIE: Quelle est la surface de vitrerie à nettoyer : • Le hall d\'entrée? • Les cloisons vitrées (hauteur/largeur des fenêtres)? • Vitrerie intérieure accessible? • Vitrerie extérieure accessible? Le nettoyage de la vitrerie (intérieure/extérieure) inaccessible (hors hauteur d’homme) est-il inclus au périmètre? Si oui, spécifier la surface et le moyen d\'élévation (perche, nacelle, araignée, nacelle de toit, nacelle VL/PL...) nécessaire pour réaliser la prestation et qui le fournit (matériel client, matériel à louer/acheter). S\'il s\'agit de vitrerie alpiniste précisez également le nombre de points d\'ancrage. / • Préciser le nombre de faces de la vitrerie à nettoyer',
        comment: null,
      },
      {
        question: 'COLLECTE / TRI DES DÉCHETS (1/2): - Existe-t-il des points de collecte centralisés ou s\'agit-il de poubelles individuelles? - Existe-t-il une procédure spécifique de tri sélectif en place? - Indiquer la taille / calibre des sacs poubelle',
        comment: null,
      },
      {
        question: 'COLLECTE / TRI DES DÉCHETS (2/2): Equans est-il en charge : - De la collecte et du tri des déchets dangereux et non dangereux? - De l\'évacuation jusqu\'au local approprié et du stockage? - De la gestion des prestataires de services d\'élimination des déchets (traitement / recyclage)? ',
        comment: null,
      },
      {
        question: 'TAPIS D\'ENTRÉE: • À quelle fréquence sont-ils changés (rotation)? • Préciser le nombre et les dimensions des tapis',
        comment: null,
      },
      {
        question: 'Les mécanismes conventionnels de transfert de personnel s\'appliquent-t-ils dans le cas présent? (Bill 7 en Ontario),',
        comment: null,
      },
      {
        question: 'Décrire l\'ORGANISATION EN PLACE (nombre de chefs d\'équipes, nombre d\'employés à temps plein/partiel, équipes, horaires de travail, rapports, etc.). Combien de fois par jour les nettoyeurs interviennent-ils?',
        comment: null,
      },
    ],
  },
};
