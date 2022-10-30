import { useState } from 'react';

export const useTheme = () => {
  const [isLight, setLight] = useState(true);

  function toggleTheme() {
    if (isLight === true) {
      document.body.style.setProperty('--primary-background-color', ' #2B2D33');
      document.body.style.setProperty(
        '--primary-button-content-color',
        ' #2B2D33'
      );
      document.body.style.setProperty(
        '--primary-filters-area-color',
        ' #171B1F'
      );
      document.body.style.setProperty('--primary-text-color', ' #BCC4CC');
      setLight(!isLight);
    } else {
      document.body.style.setProperty('--primary-background-color', ' #FFFFFF');
      document.body.style.setProperty(
        '--primary-button-content-color',
        ' #FFFFFF'
      );
      document.body.style.setProperty(
        '--primary-filters-area-color',
        ' #EBF0F5'
      );
      document.body.style.setProperty('--primary-text-color', ' #000000');
      setLight(!isLight);
    }
  }

  return {
    isLight,
    toggleTheme,
  };
};
