// src/TranslationResult.js


import React from 'react';


const TranslationResult = ({ translatedText }) => {
  

  return (
    <div className="card bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg p-4 rounded-lg shadow-md w-full md:w-1/2">
      
      <textarea
        value={translatedText}
        readOnly
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-mono-400"
        rows="10"
        placeholder="Translated text will appear here..."
      ></textarea>
    </div>
  );
}

export default TranslationResult;
