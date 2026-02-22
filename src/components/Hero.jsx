import React, { useState } from 'react';
import { FiSearch, FiEdit3 } from 'react-icons/fi';

const Hero = ({ onPreviewTextChange }) => {
  const [customText, setCustomText] = useState('');
  const [showInput, setShowInput] = useState(false);

  const handleCustomTextSubmit = (e) => {
    e.preventDefault();
    if (customText.trim()) {
      onPreviewTextChange(customText);
      setCustomText('');
      setShowInput(false);
    }
  };

  return (
    <section id="home" className="pt-20 pb-12 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in">
          Font Pairing Recommender
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fade-in delay-100">
          Temukan kombinasi font Google Fonts yang sempurna untuk proyek desain Anda. 
          Preview real-time, copy CSS, dan filter berdasarkan mood.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-fade-in delay-200">
          <button 
            onClick={() => setShowInput(!showInput)}
            className="btn-secondary flex items-center gap-2"
          >
            <FiEdit3 /> Custom Preview Text
          </button>
        </div>

        {showInput && (
          <form onSubmit={handleCustomTextSubmit} className="mb-8 animate-slide-up">
            <div className="flex items-center gap-2 max-w-md mx-auto">
              <input
                type="text"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder="Enter your custom text..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                autoFocus
              />
              <button type="submit" className="btn-primary">
                Apply
              </button>
            </div>
          </form>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mt-12">
          <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-sm">
            <div className="text-indigo-600 font-semibold mb-1">100+</div>
            <div className="text-sm text-gray-600">Font Combinations</div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-sm">
            <div className="text-indigo-600 font-semibold mb-1">Real-time</div>
            <div className="text-sm text-gray-600">Preview</div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-sm">
            <div className="text-indigo-600 font-semibold mb-1">7 Moods</div>
            <div className="text-sm text-gray-600">Formal, Playful, Elegan, Modern, Classic, Bold, Minimal</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;