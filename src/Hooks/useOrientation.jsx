import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

const useOrientation = () => {
  const [orientation, setOrientation] = useState('portrait');

  useEffect(() => {
    const updateOrientation = () => {
      const { width, height } = Dimensions.get('window');
      setOrientation(width > height ? 'landscape' : 'portrait');
    };

    const subscription = Dimensions.addEventListener('change', ({ window: { width, height } }) => {
      setOrientation(width > height ? 'landscape' : 'portrait');
    });

    // Set initial orientation
    updateOrientation();

    // Cleanup listener on unmount
    return () => {
      subscription?.remove();
    };
  }, []);

  return orientation;
};

export default useOrientation;