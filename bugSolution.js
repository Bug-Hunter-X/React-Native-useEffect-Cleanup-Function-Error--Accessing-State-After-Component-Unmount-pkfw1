import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [intervalId, setIntervalId] = useState(null);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      console.log('Interval running');
    }, 1000);
    setIntervalId(id);

    return () => {
      if (mounted) {
        clearInterval(intervalId);
        console.log('Interval cleared');
      }
    };
  }, []);

  useEffect(() => {
    return () => {
      setMounted(false);
    };
  }, []);

  return (
    <View>
      {/* Component content */}
    </View>
  );
};

export default MyComponent;