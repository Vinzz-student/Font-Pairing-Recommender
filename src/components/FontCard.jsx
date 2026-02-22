import React, { useState } from 'react';
import { FiCopy, FiCheck, FiExternalLink } from 'react-icons/fi';

const FontCard = ({ pairing, previewText, onCopy }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('preview');

  const handleCopyCSS = () => {
    const css = `/* Heading Font: ${pairing.headingFont} */\n${pairing.headingCSS}\n\n/* Body Font: ${pairing.bodyFont} */\n${pairing.bodyCSS}`;
    onCopy(css);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getMoodColor = (mood) => {
    const colors = {
      formal: 'bg-blue-100 text-blue-800',
      playful: 'bg-pink-100 text-pink-800',
      elegan: 'bg-purple-100 text-purple-800'
    };
    return colors[mood] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="card group animate-fade-in">
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-semibold mb-1">
              {pairing.headingFont} + {pairing.bodyFont}
            </h3>
            <span className={`inline-block px-2 py-1 text-xs rounded-full ${getMoodColor(pairing.mood)}`}>
              {pairing.mood.charAt(0).toUpperCase() + pairing.mood.slice(1)}
            </span>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-2">
            <button
              onClick={handleCopyCSS}
              className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"
              title="Copy CSS"
            >
              {copied ? <FiCheck className="text-green-500" /> : <FiCopy />}
            </button>
            <a
              href={`https://fonts.google.com/specimen/${pairing.headingFont.replace(/\s+/g, '+')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"
              title="View on Google Fonts"
            >
              <FiExternalLink />
            </a>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b mb-4">
          <button
            className={`px-4 py-2 -mb-px text-sm font-medium ${
              activeTab === 'preview'
                ? 'text-indigo-600 border-b-2 border-indigo-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('preview')}
          >
            Preview
          </button>
          <button
            className={`px-4 py-2 -mb-px text-sm font-medium ${
              activeTab === 'details'
                ? 'text-indigo-600 border-b-2 border-indigo-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('details')}
          >
            Details
          </button>
        </div>

        {/* Content */}
        {activeTab === 'preview' ? (
          <div className="space-y-4">
            <div>
              <p className="text-xs text-gray-500 mb-1">Heading</p>
              <div style={{ fontFamily: pairing.headingFont }}>
                <h2 className="text-2xl font-bold">
                  {previewText}
                </h2>
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Body</p>
              <div style={{ fontFamily: pairing.bodyFont }}>
                <p className="text-base">
                  {previewText}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="text-sm text-gray-600">{pairing.description}</p>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-xs font-mono text-gray-800 whitespace-pre-wrap">
                {pairing.headingCSS}
              </p>
              <p className="text-xs font-mono text-gray-800 mt-2 whitespace-pre-wrap">
                {pairing.bodyCSS}
              </p>
            </div>
            <p className="text-xs text-gray-500">
              <span className="font-semibold">Best for:</span> {pairing.bestFor}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FontCard;