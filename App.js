import React, { useState, useEffect } from 'react';
import { data } from './data';
import { ArrowLeft, Book, Globe, Users, HardHat, Soup, Shield, Trash2, Fuel, Flower2, Snowflake, ClipboardCheck } from 'lucide-react';
import { Tooltip } from '@radix-ui/react-tooltip';

// A mapping of category keys to icon components from lucide-react
const categoryIcons = {
  'general-data': ClipboardCheck,
  'hard-fm': HardHat,
  'catering': Soup,
  'uniforms': Users,
  'helpdesk': Book,
  'security-system': Shield,
  'waste-management': Trash2,
  'fuel-system': Fuel,
  'grounds-eng': Flower2, // This corresponds to 'grounds'
  'snow-removal': Snowflake,
  'pest-control': ClipboardCheck, // Using a generic icon
  'cleaning-mat-replacement': ClipboardCheck, // Using a generic icon
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
    fr: 'Système de Sécurité'
  },
  'waste-management': {
    en: 'Waste Management',
    fr: 'Gestion des Déchets'
  },
  'fuel-system': {
    en: 'Fuel System',
    fr: 'Système de Carburant'
  },
  'grounds-eng': {
    en: 'Grounds',
    fr: 'Espaces Verts'
  },
  'snow-removal': {
    en: 'Snow Removal',
    fr: 'Déneigement'
  },
  'pest-control': {
    en: 'Pest Control',
    fr: 'Contrôle des Nuisibles'
  },
  'cleaning-mat-replacement': {
    en: 'Cleaning & Mat Replacement',
    fr: 'Nettoyage & Tapis'
  }
};

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [language, setLanguage] = useState('en');
  const [answers, setAnswers] = useState({});

  // Initialize answers from localStorage on component mount
  useEffect(() => {
    const savedAnswers = localStorage.getItem('pwa-data-collection-answers');
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
  }, []);

  // Save answers to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('pwa-data-collection-answers', JSON.stringify(answers));
  }, [answers]);

  // Handle input changes for a question
  const handleInputChange = (category, questionIndex, field, value) => {
    setAnswers(prevAnswers => {
      const newAnswers = { ...prevAnswers };
      if (!newAnswers[category]) {
        newAnswers[category] = {};
      }
      if (!newAnswers[category][questionIndex]) {
        newAnswers[category][questionIndex] = {};
      }
      newAnswers[category][questionIndex][field] = value;
      return newAnswers;
    });
  };

  const currentData = data[language] || data.en;
  const categories = Object.keys(currentData);

  const renderCategoryList = () => (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {categories.map((categoryKey) => {
        const Icon = categoryIcons[categoryKey];
        return (
          <button
            key={categoryKey}
            onClick={() => setSelectedCategory(categoryKey)}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200"
          >
            {Icon && <Icon className="w-12 h-12 text-blue-600 mb-2" />}
            <span className="text-lg font-semibold text-gray-800 text-center">{categoryTitles[categoryKey][language]}</span>
          </button>
        );
      })}
    </div>
  );

  const renderQuestions = () => {
    if (!selectedCategory) return null;

    const questions = currentData[selectedCategory];
    const savedCategoryAnswers = answers[selectedCategory] || {};

    return (
      <div className="p-4">
        <button
          onClick={() => setSelectedCategory(null)}
          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 mb-6 font-medium"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          {language === 'en' ? 'Back to Categories' : 'Retour aux Catégories'}
        </button>

        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          {categoryTitles[selectedCategory][language]}
        </h2>

        <div className="space-y-6">
          {questions.map((q, index) => {
            const savedQuestionAnswers = savedCategoryAnswers[index] || {};
            return (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                <p className="text-sm font-semibold text-gray-500 mb-2">
                  {language === 'en' ? 'Question' : 'Question'} {index + 1}
                </p>
                <p className="text-base text-gray-800 mb-4 font-medium">{q.question}</p>
                {q.comment && (
                  <div className="p-3 mb-4 text-sm text-gray-600 bg-gray-50 rounded-lg border border-gray-100">
                    <p className="font-semibold">{language === 'en' ? 'Comment' : 'Commentaire'}</p>
                    <p>{q.comment}</p>
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-gray-700 font-medium">{language === 'en' ? 'Answer' : 'Réponse'}</span>
                    <textarea
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      rows="3"
                      value={savedQuestionAnswers.answer || ''}
                      onChange={(e) => handleInputChange(selectedCategory, index, 'answer', e.target.value)}
                    ></textarea>
                  </label>
                  <label className="block">
                    <span className="text-gray-700 font-medium">{language === 'en' ? 'Additional Notes' : 'Notes supplémentaires'}</span>
                    <textarea
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      rows="3"
                      value={savedQuestionAnswers.notes || ''}
                      onChange={(e) => handleInputChange(selectedCategory, index, 'notes', e.target.value)}
                    ></textarea>
                  </label>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen font-inter">
      <header className="bg-white shadow-md p-4 sticky top-0 z-10 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">
          {language === 'en' ? 'Data Collection App' : 'Application de Collecte de Données'}
        </h1>
        <button
          onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
          className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200"
          aria-label={language === 'en' ? 'Switch to French' : 'Passer à l\'anglais'}
        >
          <Globe className="w-6 h-6 text-gray-600" />
        </button>
      </header>

      <main className="container mx-auto p-4 max-w-4xl">
        {!selectedCategory ? renderCategoryList() : renderQuestions()}
      </main>

      <footer className="p-4 text-center text-sm text-gray-500">
        <p>&copy; 2023 Data Collection PWA. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
