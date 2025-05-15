import React, { useEffect, useState } from 'react';
import './loadingScreen.css';

const LoadingScreen = ({ onLoadComplete }) => {
  const [text, setText] = useState('');
  const fullText = 'Sanya';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(interval);
        setText(fullText); // กำหนดให้แสดงข้อความทั้งหมดเมื่อโหลดเสร็จ
        setTimeout(onLoadComplete, 500);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  return (
    <div className="loading-screen">
      <div className="loading-text">{text}</div>
    </div>
  );
};

export default LoadingScreen;
