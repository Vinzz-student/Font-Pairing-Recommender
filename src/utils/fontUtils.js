// Utility functions for font handling

/**
 * Format font name for Google Fonts URL
 * @param {string} fontName - Name of the font
 * @returns {string} Formatted font name for URL
 */
export const formatFontForURL = (fontName) => {
  return fontName.replace(/\s+/g, '+');
};

/**
 * Generate Google Fonts import URL for multiple fonts
 * @param {Array} fonts - Array of font names
 * @returns {string} Google Fonts import URL
 */
export const generateFontsURL = (fonts) => {
  const formattedFonts = fonts.map(font => {
    const formattedName = formatFontForURL(font);
    return `${formattedName}:wght@300;400;500;600;700`;
  });
  
  return `https://fonts.googleapis.com/css2?family=${formattedFonts.join('&family=')}&display=swap`;
};

/**
 * Get font category based on font name
 * @param {string} fontName - Name of the font
 * @returns {string} Font category (serif, sans-serif, display, handwriting, monospace)
 */
export const getFontCategory = (fontName) => {
  const serifFonts = ['Playfair Display', 'Merriweather', 'Cormorant Garamond', 'Bodoni Moda', 'Cormorant', 'PT Serif', 'Lora', 'Libre Baskerville'];
  const sansFonts = ['Roboto', 'Open Sans', 'Lato', 'Montserrat', 'Poppins', 'Raleway', 'Nunito', 'Work Sans', 'Quicksand', 'Oswald', 'Source Sans Pro', 'PT Sans', 'Ubuntu', 'Noto Sans'];
  const displayFonts = ['Fredoka One', 'Comfortaa', 'Bebas Neue', 'Abril Fatface', 'Lobster'];
  const handwritingFonts = ['Pacifico', 'Caveat', 'Dancing Script', 'Satisfy'];
  const monospaceFonts = ['Roboto Mono', 'Source Code Pro', 'Fira Code', 'JetBrains Mono'];

  if (serifFonts.includes(fontName)) return 'serif';
  if (sansFonts.includes(fontName)) return 'sans-serif';
  if (displayFonts.includes(fontName)) return 'display';
  if (handwritingFonts.includes(fontName)) return 'handwriting';
  if (monospaceFonts.includes(fontName)) return 'monospace';
  
  return 'sans-serif'; // default
};

/**
 * Generate CSS font-family string
 * @param {string} fontName - Name of the font
 * @returns {string} CSS font-family declaration
 */
export const generateFontCSS = (fontName) => {
  const category = getFontCategory(fontName);
  return `font-family: '${fontName}', ${category};`;
};

/**
 * Get font weights recommendation
 * @param {string} fontName - Name of the font
 * @returns {Array} Recommended font weights
 */
export const getRecommendedWeights = (fontName) => {
  const recommendations = {
    'Playfair Display': [400, 500, 600, 700],
    'Roboto': [300, 400, 500, 700],
    'Open Sans': [300, 400, 600, 700],
    'Lato': [300, 400, 700],
    'Montserrat': [300, 400, 500, 600, 700],
    'Poppins': [300, 400, 500, 600, 700],
    'Raleway': [300, 400, 500, 600, 700],
    'Merriweather': [300, 400, 700],
    'Nunito': [300, 400, 600, 700],
    'Work Sans': [300, 400, 500, 600, 700],
    'Quicksand': [300, 400, 500, 600, 700],
    'Oswald': [300, 400, 500, 600, 700],
    'Source Sans Pro': [300, 400, 600, 700],
    'PT Sans': [400, 700],
    'Ubuntu': [300, 400, 500, 700],
    'Cormorant Garamond': [300, 400, 500, 600, 700],
    'Fredoka One': [400],
    'Comfortaa': [300, 400, 500, 600, 700]
  };

  return recommendations[fontName] || [400, 500, 600, 700];
};

/**
 * Check if two fonts pair well together
 * @param {string} font1 - First font name
 * @param {string} font2 - Second font name
 * @returns {Object} Pairing analysis
 */
export const analyzeFontPairing = (font1, font2) => {
  const category1 = getFontCategory(font1);
  const category2 = getFontCategory(font2);
  
  let compatibility = 'good';
  let reason = '';
  
  if (category1 === category2) {
    compatibility = 'fair';
    reason = 'Both fonts are from the same category. Consider adding contrast.';
  } else if (
    (category1 === 'serif' && category2 === 'sans-serif') ||
    (category1 === 'sans-serif' && category2 === 'serif')
  ) {
    compatibility = 'excellent';
    reason = 'Classic serif + sans-serif combination provides good contrast.';
  } else if (
    (category1 === 'display' && category2 === 'sans-serif') ||
    (category1 === 'sans-serif' && category2 === 'display')
  ) {
    compatibility = 'good';
    reason = 'Display font works well for headings with simple sans-serif for body.';
  } else {
    compatibility = 'caution';
    reason = 'This combination might be tricky. Test carefully for readability.';
  }
  
  return {
    compatibility,
    reason,
    category1,
    category2
  };
};

/**
 * Generate sample text for font preview
 * @param {string} type - Type of sample (heading, paragraph, both)
 * @returns {string} Sample text
 */
export const generateSampleText = (type = 'both') => {
  const samples = {
    heading: 'The Art of Typography',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    both: 'The quick brown fox jumps over the lazy dog'
  };
  
  return samples[type] || samples.both;
};

/**
 * Save favorite font pairing to localStorage
 * @param {Object} pairing - Font pairing object
 */
export const saveFavoritePairing = (pairing) => {
  const favorites = JSON.parse(localStorage.getItem('favoritePairings') || '[]');
  
  // Check if already exists
  const exists = favorites.some(
    fav => fav.headingFont === pairing.headingFont && fav.bodyFont === pairing.bodyFont
  );
  
  if (!exists) {
    favorites.push({
      ...pairing,
      savedAt: new Date().toISOString()
    });
    localStorage.setItem('favoritePairings', JSON.stringify(favorites));
    return true;
  }
  
  return false;
};

/**
 * Get all favorite pairings from localStorage
 * @returns {Array} Favorite pairings
 */
export const getFavoritePairings = () => {
  return JSON.parse(localStorage.getItem('favoritePairings') || '[]');
};

/**
 * Remove favorite pairing from localStorage
 * @param {string} headingFont - Heading font name
 * @param {string} bodyFont - Body font name
 */
export const removeFavoritePairing = (headingFont, bodyFont) => {
  const favorites = JSON.parse(localStorage.getItem('favoritePairings') || '[]');
  const filtered = favorites.filter(
    fav => !(fav.headingFont === headingFont && fav.bodyFont === bodyFont)
  );
  localStorage.setItem('favoritePairings', JSON.stringify(filtered));
};