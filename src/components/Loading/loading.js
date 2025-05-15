import React, { useEffect } from 'react';
import './loading.css'; // Import the CSS for styling

const Loading = ({ text, setLoading }) => {
  useEffect(() => {
    // Set a timeout for how long the animation should last (e.g., 3 seconds)
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading and show the homepage
    }, 3000);
    return () => clearTimeout(timer); // Clear the timer when the component unmounts
  }, [setLoading]);

  return (
    <div className="loading-container">
      <h1 className="loading-text">{text}</h1>
    </div>
  );
};

export default Loading;