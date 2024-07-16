import React, { useState } from 'react';

const languages = [
    { language: 'BG', name: 'Bulgarian' },
    { language: 'CS', name: 'Czech' },
    { language: 'DA', name: 'Danish' },
    { language: 'DE', name: 'German' },
    { language: 'EL', name: 'Greek' },
    { language: 'EN', name: 'English' },
    { language: 'ES', name: 'Spanish' },
    { language: 'ET', name: 'Estonian' },
    { language: 'FI', name: 'Finnish' },
    { language: 'FR', name: 'French' },
    { language: 'HU', name: 'Hungarian' },
    { language: 'ID', name: 'Indonesian' },
    { language: 'IT', name: 'Italian' },
    { language: 'JA', name: 'Japanese' },
    { language: 'KO', name: 'Korean' },
    { language: 'LT', name: 'Lithuanian' },
    { language: 'LV', name: 'Latvian' },
    { language: 'NB', name: 'Norwegian' },
    { language: 'NL', name: 'Dutch' },
    { language: 'PL', name: 'Polish' },
    { language: 'PT', name: 'Portuguese' },
    { language: 'RO', name: 'Romanian' },
    { language: 'RU', name: 'Russian' },
    { language: 'SK', name: 'Slovak' },
    { language: 'SL', name: 'Slovenian' },
    { language: 'SV', name: 'Swedish' },
    { language: 'TR', name: 'Turkish' },
    { language: 'UK', name: 'Ukrainian' },
    { language: 'ZH', name: 'Chinese' }
  ];
  

const TranslationForm = ({ onTranslate }) => {
  const [inputText, setInputText] = useState('');
  const [targetLang, setTargetLang] = useState('DE'); // Default to German

  const handleTranslate = () => {
    onTranslate(inputText, targetLang);
  };

  

  return (
    <div className="card bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg p-4 rounded-lg shadow-md w-full md:w-1/2">
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-mono-400"
        rows="10"
        placeholder="Enter text in Any National Language to translate into Your desired language..."
      ></textarea>
      <div className="flex justify-between mt-4">
       
        <div>
          <label htmlFor="targetLang" className="mr-2">Translate to:</label>
          <select
            id="targetLang"
            value={targetLang}
            onChange={(e) => setTargetLang(e.target.value)}
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-mono-400"
          >
            {languages.map((lang) => (
              <option key={lang.language} value={lang.language}>{lang.name}</option>
            ))}
          </select>
        </div>
      </div>
      <button
        onClick={handleTranslate}
        className="mt-4 px-4 py-2 bg-red-mono-500 text-white rounded-md hover:bg-red-mono-600 focus:outline-none focus:ring-2 focus:ring-red-mono-400"
      >
        𝕋𝕣𝕒𝕟𝕤𝕝𝕒𝕥𝕖
      </button>
    </div>
  );
}

export default TranslationForm;
