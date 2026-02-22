import React from 'react';
import { FiSearch } from 'react-icons/fi';

const FilterBar = ({ selectedMood, onMoodChange, onSearch, totalResults }) => {
  const moods = [
    { id: 'all', label: 'All', color: 'gray' },
    { id: 'formal', label: 'Formal', color: 'blue' },
    { id: 'playful', label: 'Playful', color: 'pink' },
    { id: 'elegan', label: 'Elegan', color: 'purple' },
    { id: 'modern', label: 'Modern', color: 'indigo' },
    { id: 'classic', label: 'Classic', color: 'amber' },
    { id: 'bold', label: 'Bold', color: 'red' },
    { id: 'minimal', label: 'Minimal', color: 'slate' }
  ];

  const getButtonClass = (moodId) => {
    const baseClass = "px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base";
    
    if (selectedMood === moodId) {
      switch(moodId) {
        case 'formal':
          return `${baseClass} bg-blue-600 text-white shadow-md scale-105`;
        case 'playful':
          return `${baseClass} bg-pink-600 text-white shadow-md scale-105`;
        case 'elegan':
          return `${baseClass} bg-purple-600 text-white shadow-md scale-105`;
        case 'modern':
          return `${baseClass} bg-indigo-600 text-white shadow-md scale-105`;
        case 'classic':
          return `${baseClass} bg-amber-600 text-white shadow-md scale-105`;
        case 'bold':
          return `${baseClass} bg-red-600 text-white shadow-md scale-105`;
        case 'minimal':
          return `${baseClass} bg-slate-600 text-white shadow-md scale-105`;
        default:
          return `${baseClass} bg-gray-600 text-white shadow-md scale-105`;
      }
    } else {
      switch(moodId) {
        case 'formal':
          return `${baseClass} bg-gray-100 text-gray-700 hover:bg-blue-100`;
        case 'playful':
          return `${baseClass} bg-gray-100 text-gray-700 hover:bg-pink-100`;
        case 'elegan':
          return `${baseClass} bg-gray-100 text-gray-700 hover:bg-purple-100`;
        case 'modern':
          return `${baseClass} bg-gray-100 text-gray-700 hover:bg-indigo-100`;
        case 'classic':
          return `${baseClass} bg-gray-100 text-gray-700 hover:bg-amber-100`;
        case 'bold':
          return `${baseClass} bg-gray-100 text-gray-700 hover:bg-red-100`;
        case 'minimal':
          return `${baseClass} bg-gray-100 text-gray-700 hover:bg-slate-100`;
        default:
          return `${baseClass} bg-gray-100 text-gray-700 hover:bg-gray-200`;
      }
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-8">
      <div className="flex flex-col gap-4">
        {/* Search Bar */}
        <div className="relative w-full">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search fonts by name, description, or use case..."
            onChange={(e) => onSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        {/* Mood Filter - Scrollable on mobile */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 overflow-x-auto pb-2 hide-scrollbar">
            <div className="flex gap-2 min-w-max">
              {moods.map((mood) => (
                <button
                  key={mood.id}
                  onClick={() => onMoodChange(mood.id)}
                  className={getButtonClass(mood.id)}
                >
                  {mood.label}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="text-sm text-gray-500 whitespace-nowrap">
            {totalResults} {totalResults === 1 ? 'result' : 'results'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;