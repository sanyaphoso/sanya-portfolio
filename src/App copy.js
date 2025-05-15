import logo from './logo.svg';
import './App.css';

// function App() {
//   return (  
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <p>
//           Sanya
//         </p>
//         {/* <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedLoadingText = ({ text, onComplete }) => {
  const letters = Array.from(text);

  // กำหนดแอนิเมชันทีละตัวอักษร
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.1 * i },
    }),
  };

  const child = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 12, stiffness: 100 },
    },
  };

  // การแสดงข้อความทีละตัวด้วย Framer Motion
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      onAnimationComplete={onComplete}  // เรียกเมื่อแอนิเมชันเสร็จสิ้น
      className="loading-text"
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  // ฟังก์ชันที่ทำงานเมื่อการโหลดเสร็จสิ้น
  const handleComplete = () => {
    setTimeout(() => {
      setLoading(false);  // เมื่อแอนิเมชันเสร็จจะเปลี่ยน state เป็น false
    }, 1000);
  };

  return (
    <div>
      {loading ? (
        <AnimatedLoadingText text="Sanya" onComplete={handleComplete} />
      ) : (
        <Home />  // แสดงหน้า Home เมื่อการโหลดเสร็จสิ้น
      )}
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
    </div>
  );
};

export default App;
