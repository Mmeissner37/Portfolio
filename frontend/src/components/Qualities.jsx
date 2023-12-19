import React, { useState, useEffect } from 'react';

const Typewriter = ({ texts, speed }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    let lineIndex = 0;

    const intervalId = setInterval(() => {
      setDisplayedText((prevText) => prevText + texts[lineIndex][index]);
      index++;

      if (index === texts[lineIndex].length) {
        index = 0;
        lineIndex++;
        if (lineIndex === texts.length) {
          clearInterval(intervalId);
        }
      }
    }, speed);

    const cursorIntervalId = setInterval(() => {
      setShowCursor((prevShowCursor) => !prevShowCursor);
    }, 500); // Adjust the cursor blinking speed

    return () => {
      clearInterval(intervalId);
      clearInterval(cursorIntervalId);
    };
  }, [texts, speed]);

  return (
    <div>
      <div>
        {displayedText}
        {showCursor && <span>|</span>}
      </div>
    </div>
  );
};

const Qualities = () => {
  const texts = ["constantly learning,", " detail oriented,", " an expert at multi-tasking,", " and determined to succeed!"];
  const speed = 150; // Adjust the speed as needed

  return (
    <div>
      <h2>
        <Typewriter texts={texts} speed={speed} />
      </h2>
    </div>
  );
};

export default Qualities;