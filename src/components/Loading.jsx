import React, { useState, useEffect } from "react";
import loaderGif from '../assets/loader-page.gif';


function Loading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a 5-second loading period
    const timeoutId = setTimeout(() => {
      setLoading(false);
      document.body.classList.remove("no-overflow"); // Remove the no-overflow class
    }, 5000);

    // Clear the timeout when the component is unmounted
    return () => {
      clearTimeout(timeoutId);
      document.body.classList.remove("no-overflow"); // Ensure the class is removed on unmount
    };
  }, []); // Empty dependency array to run the effect only on mount

  useEffect(() => {
    // Add the no-overflow class to body when loading is true
    if (loading) {
      document.body.classList.add("no-overflow");
    } else {
      document.body.classList.remove("no-overflow");
    }
  }, [loading]); // Run this effect whenever the loading state changes

  return (
    <div>
      {loading && (
        <div className="overlay">
          <img src={loaderGif} alt="Loading page" />
        </div>
      )}
    </div>
  );
}

export default Loading;
