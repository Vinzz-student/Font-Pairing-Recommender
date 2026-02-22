import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FilterBar from './components/FilterBar';
import FontCard from './components/FontCard';
import Footer from './components/Footer';
import { fontPairings } from './data/fontPairings';
import PreviewText from './components/PreviewText';
import './App.css';

function App() {
  const [pairings, setPairings] = useState(fontPairings);
  const [filteredPairings, setFilteredPairings] = useState(fontPairings);
  const [selectedMood, setSelectedMood] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [previewText, setPreviewText] = useState('The quick brown fox jumps over the lazy dog');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Simulate loading
    setIsLoading(true);
    setTimeout(() => {
      filterPairings();
      setIsLoading(false);
    }, 300);
  }, [selectedMood, searchQuery]);

  const filterPairings = () => {
    let filtered = pairings;

    // Filter by mood
    if (selectedMood !== 'all') {
      filtered = filtered.filter(pairing => pairing.mood === selectedMood);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(pairing => 
        pairing.headingFont.toLowerCase().includes(query) ||
        pairing.bodyFont.toLowerCase().includes(query) ||
        pairing.description.toLowerCase().includes(query)
      );
    }

    setFilteredPairings(filtered);
  };

  const handleMoodChange = (mood) => {
    setSelectedMood(mood);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handlePreviewTextChange = (text) => {
    setPreviewText(text);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      
      <main className="container-custom py-8">
        <Hero onPreviewTextChange={handlePreviewTextChange} />
        
        <FilterBar 
          selectedMood={selectedMood}
          onMoodChange={handleMoodChange}
          onSearch={handleSearch}
          totalResults={filteredPairings.length}
        />
        
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          </div>
        ) : (
          <>
            {filteredPairings.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No font pairings found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {filteredPairings.map((pairing, index) => (
                  <FontCard 
                    key={index}
                    pairing={pairing}
                    previewText={previewText}
                    onCopy={copyToClipboard}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </main>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <Navbar />
      
      {/* Tambahkan PreviewText component di sini */}
      <PreviewText 
        onTextChange={handlePreviewTextChange}
        initialText={previewText}
      />
    
    <Footer />
  </div>
  </div>
  );
}

export default App;