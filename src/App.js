import React, { useState } from 'react';
import Home from './pages/Home/home';
import AnimatedLoadingText from './components/AnimatedLoadingText/animatedLoadingText';
import './App.css';
import About from './pages/About/about';
import Portfolio from './pages/Portfolio/portfolio';
import Contact from './pages/Contact/contact';
import NavBar from './components/Navbar/navbar'
import Footer from './components/Footer/footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, Typography, Toolbar } from '@mui/material';
// import { Typography, Link, IconButton, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
// new style
import AppTheme from './shared-theme/AppTheme';
import AppAppBar from './components/AppAppBar/appAppBar';
import CssBaseline from '@mui/material/CssBaseline';

const App = (props) => {
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState('light');

  // ฟังก์ชันที่ทำงานเมื่อการโหลดเสร็จสิ้น
  const handleComplete = () => {
    setTimeout(() => {
      setLoading(false);  // เมื่อแอนิเมชันเสร็จจะเปลี่ยน state เป็น false
    },);
  };

  const theme = createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
          // กำหนดสีสำหรับโหมดสว่าง
          primary: {
            main: '#ffffff', // สีน้ำเงิน (#1976d2)
          },
          text: {
            primary: '#000000', // สีตัวอักษรใน theme สว่าง
          },
        }
        : {
          // กำหนดสีสำหรับโหมดมืด
          primary: {
            main: '#bb86fc', // สีม่วง (สามารถเปลี่ยนได้)
          },
        }),
    },
  });

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <AppTheme {...props}>
      <div className="App"
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          pt: { xs: 20, sm: 50 }
        }}
        
      >
        {loading ? (
          <AnimatedLoadingText text="SANYA" onComplete={handleComplete} />
        ) : (
          // style={{ flex: 1, minHeight: '100vh', pt: { xs: 20, sm: 50 }}}
          <div>
            <CssBaseline enableColorScheme />
            <Router>
              <AppAppBar />
              <div >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
              </div>
              <Footer />
            </Router>
          </div>
        )}
      </div>
    </AppTheme>
  );
};

export default App;

