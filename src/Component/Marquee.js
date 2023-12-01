import React, { useState, useEffect } from 'react';
import '../Component/Maequee.css';

const Marquee = () => {
  const [texts, setTexts] = useState(["This is the first text marquee.", "This is the second text marquee."]);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the text index
      setCurrentTextIndex(prevIndex => (prevIndex + 1) % texts.length);
    }, 500); // Adjust the interval (in milliseconds) as needed

    return () => {
      // Cleanup the interval on component unmount
      clearInterval(intervalId);
    };
  }, [texts]);

  return (
    <div className='center'>
    <div className="marquee-container">
      {texts.map((text, index) => (
        <div
          key={index}
          className="marquee"
          style={{ opacity: index === currentTextIndex ? 1 : 0 }}
        >
          {text}
        </div>
      ))}
    </div>
    </div>
  );
};

export default Marquee;
