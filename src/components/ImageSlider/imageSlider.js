import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import './imageSlider.css';

const ImageSlider = ({ images }) => {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  // ฟังก์ชันสำหรับไปยังสไลด์ถัดไป
  // ใช้ useCallback เพื่อห่อหุ้ม nextSlide
  const nextSlide = useCallback(() => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]); // ใช้ dependency เป็น images.length เท่านั้น

  // ฟังก์ชันสำหรับสไลด์ก่อนหน้า
  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // สไลด์อัตโนมัติ
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextSlide, 3000); // เปลี่ยนสไลด์ทุก 3 วินาที
      return () => clearInterval(interval);
    }
  }, [isHovered, nextSlide]);

  return (
    <div
      className="slider"
      onMouseEnter={() => setIsHovered(true)}  // หยุดสไลด์เมื่อชี้เมาส์
      onMouseLeave={() => setIsHovered(false)} // เริ่มสไลด์อีกครั้งเมื่อเมาส์ออก
    >
      <button onClick={prevSlide}>{"<"}</button>

      <AnimatePresence>
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={`Slide ${index}`}
          initial={{ opacity: 0, x: 100, }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          onClick={() => setOpenDialog(true)} // เปิด Dialog เมื่อคลิกที่รูป
          style={{ cursor: 'pointer'}}       // เปลี่ยน cursor เป็น pointer
          whileHover={{ scale: 1.1 }}         // ขยายขนาดเมื่อเอาเมาส์ชี้
          whileTap={{ scale: 0.9 }}           // ย่อขนาดเมื่อคลิก
        />
      </AnimatePresence>

      <button onClick={nextSlide}>{">"}</button>

      {/* Dialog สำหรับแสดงรูปแบบขยาย */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="md" fullWidth>
        <DialogContent>
          <img
            src={images[index]}
            alt={`Slide ${index}`}
            style={{ width: '50%', height: 'auto' }}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ImageSlider;
