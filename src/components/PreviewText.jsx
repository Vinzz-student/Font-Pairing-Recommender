import React, { useState, useEffect } from 'react';
import { FiEdit2, FiRefreshCw, FiType } from 'react-icons/fi';

const PreviewText = ({ onTextChange, initialText = 'The quick brown fox jumps over the lazy dog' }) => {
  const [text, setText] = useState(initialText);
  const [isEditing, setIsEditing] = useState(false);
  const [customText, setCustomText] = useState('');
  const [textSize, setTextSize] = useState('medium');
  const [textCase, setTextCase] = useState('normal');

  const textSizes = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
    xlarge: 'text-xl'
  };

  const textCases = {
    normal: 'normal-case',
    uppercase: 'uppercase',
    lowercase: 'lowercase',
    capitalize: 'capitalize'
  };

  useEffect(() => {
    setText(initialText);
  }, [initialText]);

  const handleTextChange = (e) => {
    setCustomText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (customText.trim()) {
      setText(customText);
      onTextChange(customText);
      setIsEditing(false);
      setCustomText('');
    }
  };

  const handleReset = () => {
    const defaultText = 'The quick brown fox jumps over the lazy dog';
    setText(defaultText);
    onTextChange(defaultText);
  };

  const handleSizeChange = (size) => {
    setTextSize(size);
  };

  const handleCaseChange = (caseType) => {
    setTextCase(caseType);
  };

  const previewSamples = [
    'The quick brown fox jumps over the lazy dog',
    'Pack my box with five dozen liquor jugs',
    'How vexingly quick daft zebras jump',
    'Sphinx of black quartz, judge my vow',
    'When zombies arrive, quickly fax Judge Pat'
  ];

  const handleSampleClick = (sample) => {
    setText(sample);
    onTextChange(sample);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <FiType className="text-indigo-600" />
          Preview Text
        </h3>
        
        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"
            title="Reset to default"
          >
            <FiRefreshCw size={18} />
          </button>
          
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"
            title="Edit text"
          >
            <FiEdit2 size={18} />
          </button>
        </div>
      </div>

      {/* Text Controls */}
      <div className="flex flex-wrap gap-4 mb-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Size:</span>
          <div className="flex bg-gray-100 rounded-lg p-1">
            {Object.keys(textSizes).map((size) => (
              <button
                key={size}
                onClick={() => handleSizeChange(size)}
                className={`px-3 py-1 text-sm rounded-md transition-all ${
                  textSize === size
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-600 hover:bg-gray-200'
                }`}
              >
                {size.charAt(0).toUpperCase() + size.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Case:</span>
          <div className="flex bg-gray-100 rounded-lg p-1">
            {Object.keys(textCases).map((caseType) => (
              <button
                key={caseType}
                onClick={() => handleCaseChange(caseType)}
                className={`px-3 py-1 text-sm rounded-md transition-all ${
                  textCase === caseType
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-600 hover:bg-gray-200'
                }`}
              >
                {caseType.charAt(0).toUpperCase() + caseType.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Edit Mode */}
      {isEditing ? (
        <form onSubmit={handleSubmit} className="mb-4">
          <label htmlFor="customText" className="block text-sm font-medium text-gray-700 mb-2">
            Enter your custom preview text:
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              id="customText"
              value={customText}
              onChange={handleTextChange}
              placeholder="Type your text here..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              autoFocus
            />
            <button
              type="submit"
              className="btn-primary"
            >
              Apply
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="btn-secondary"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        /* Preview Display */
        <div className={`bg-gray-50 rounded-lg p-6 mb-4 ${textSizes[textSize]} ${textCases[textCase]}`}>
          <p className="text-gray-800">{text}</p>
        </div>
      )}

      {/* Sample Texts */}
      <div>
        <p className="text-sm text-gray-500 mb-2">Try sample texts:</p>
        <div className="flex flex-wrap gap-2">
          {previewSamples.map((sample, index) => (
            <button
              key={index}
              onClick={() => handleSampleClick(sample)}
              className="text-xs bg-gray-100 hover:bg-indigo-100 text-gray-700 hover:text-indigo-700 px-3 py-1 rounded-full transition-all"
            >
              {sample.substring(0, 20)}...
            </button>
          ))}
        </div>
      </div>

      {/* Character Count */}
      <div className="mt-4 text-xs text-gray-400 text-right">
        Characters: {text.length} | Words: {text.split(' ').length}
      </div>
    </div>
  );
};

export default PreviewText;