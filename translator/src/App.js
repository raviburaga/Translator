// src/App.js

import React, { useState } from 'react';
import TranslationForm from './Components/TranslationForm';
import TranslationResult from './Components/TranslationResult';
import './App.css'; // For additional custom styles if needed

const App = () => {
  const [translatedText, setTranslatedText] = useState('');
  const [detectedLanguage, setDetectedLanguage] = useState('');

  const handleTranslation = async (text, targetLang) => {
    try {
      const response = await fetch('http://localhost:3001/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: text,
          target_lang: targetLang
        })
      });

      const data = await response.json();
      setTranslatedText(data.translated_text);

    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleLanguageDetection = async (text) => {
    try {
      const response = await fetch('http://localhost:3001/detect', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text })
      });

      const data = await response.json();
      setDetectedLanguage(data.detected_language);

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App min-h-screen bg-custom-bg bg-cover flex flex-col items-center p-12">
     <div className="m-4 p-4 bg-red-mono-500 text-white shadow-2xl rounded-md hover:bg-red-mono-400  focus:ring-red-mono-400"> <h1 className="text-white text-4xl  m-2">ℝ𝕒𝕧𝕚 𝔹𝕦𝕣𝕒𝕘𝕒'𝕤 𝕋𝕣𝕒𝕟𝕤𝕝𝕒𝕥𝕠𝕣</h1></div>
      <div className="glassmorphism p-6 rounded-lg shadow-lg max-w-4xl w-full flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <TranslationForm onTranslate={handleTranslation}  />
        <TranslationResult translatedText={translatedText}  />
      </div>
    </div>
  );
}

export default App;
