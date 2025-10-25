import React, { useState, useEffect } from 'react';

const Typewriter = () => {
  const [text, setText] = useState('');
  const fullText = "Full Stack Developer";
  const speed = 100;

  useEffect(() => {
    let charIndex = 0;
    const intervalId = setInterval(() => {
      setText(fullText.substring(0, charIndex));
      charIndex++;

      if (charIndex > fullText.length) {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <h1 className='txtclr'>{text}</h1>
  );
}

export default Typewriter;
