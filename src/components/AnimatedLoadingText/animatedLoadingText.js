import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './animatedLoadingText.css';

const AnimatedLoadingText = ({ text, onComplete }) => {
  const [isExpanded, setIsExpanded] = useState(false); // สเตตสำหรับการขยายข้อความ
  const letters = Array.from(text);

  // กำหนดแอนิเมชันทีละตัวอักษร
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 * i },
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

  // ฟังก์ชันเรียกใช้เมื่อแอนิเมชันตัวอักษรเสร็จสิ้น
  const handleAnimationComplete = () => {
    setIsExpanded(true); // ขยายข้อความหลังแอนิเมชัน
    if (onComplete) {
      setTimeout(onComplete, 1000); // ให้เวลาแอนิเมชันขยายก่อนเปลี่ยนหน้าจอ
    }
  };

  // การแสดงข้อความทีละตัวด้วย Framer Motion และขยายเมื่อเสร็จสิ้น
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      onAnimationComplete={handleAnimationComplete}  // เรียกเมื่อแอนิเมชันเสร็จสิ้น
      className={`loading-text ${isExpanded ? 'expanded' : ''}`} // เพิ่มคลาสสำหรับการขยาย
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedLoadingText;
