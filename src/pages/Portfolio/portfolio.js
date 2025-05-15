import React, { useState } from 'react';
import { Typography, Link, IconButton, Box, Container, Stack, useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Grid2';
import MultiActionAreaCard from '../../components/Card/card';
import { motion, AnimatePresence } from 'framer-motion';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import { Facebook, LinkedIn, GitHub } from '@mui/icons-material';

import ImageSlider from '../../components/ImageSlider/imageSlider';
// import Image1 from '../../../public/images/web1';

export default function CardGrid() {
  const [selectedId, setSelectedId] = useState(null);
  

  const cards = [
    {
      id: '1',
      title: 'eService',
      description: 'eService is a web application used in Saha Farm.',
      imageUrl: '/static/images/cards/contemplative-reptile.jpg',
      buttonText: 'Learn More'
    },
    {
      id: '2',
      title: 'Web Profile',
      description: 'Chameleons are known for their ability to change colors.',
      imageUrl: '/static/images/cards/chameleon.jpg',
      buttonText: 'Discover'
    },
    {
      id: '3',
      title: 'Freight Management Systems',
      description: "Freight Management Systems is a bachelor's degree graduation project.",
      imageUrl: '/static/images/cards/gecko.jpg',
      buttonText: 'Explore'
    },
    {
      id: '4',
      title: 'Parking reservation system',
      description: "Freight Management Systems is a bachelor's degree graduation project.",
      imageUrl: '/static/images/cards/gecko.jpg',
      buttonText: 'Explore'
    },
    {
      id: '5',
      title: 'ZabHub',
      description: "Freight Management Systems is a bachelor's degree graduation project.",
      imageUrl: '/static/images/cards/gecko.jpg',
      buttonText: 'Explore'
    },
    {
      id: '6',
      title: 'Stream Dex',
      description: "Freight Management Systems is a bachelor's degree graduation project.",
      imageUrl: '/static/images/cards/gecko.jpg',
      buttonText: 'Explore'
    },

     
    // เพิ่มการ์ดอื่น ๆ ตามที่คุณต้องการ
  ];

  const webProjects = ['/images/web1.png', '/images/web2.png'];
  

  const handleClose = () => {
    setSelectedId(null);
  };

  return (
    <Box
        id="hero"
        sx={(theme) => ({
            width: '100%',
            minHeight: '100vh', // new
            display: 'flex', // new
            justifyContent: 'center', // new
            alignItems: 'center', // new
            backgroundRepeat: 'no-repeat',
            backgroundImage:
                'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
            ...theme.applyStyles('dark', {
                backgroundImage:
                    'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
            }),
        })}
    >
        <Container
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' }, // แนวตั้งบนมือถือ และแนวนอนบนจอใหญ่
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: { xs: 'center', sm: 'left' }, // ข้อความจัดตรงกลางบนมือถือ
                gap: 4, // ระยะห่างระหว่างรูปและข้อความ
                pt: { xs: 14, sm: 20 },
                pb: { xs: 8, sm: 12 },
            }}
        >
            <Stack
                spacing={2}
                useFlexGap
                sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
            >
                <div>
                  <Grid
                    container
                    spacing={2}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 2,
                    }}
                  >
                    {cards.map((card) => (
                      <Grid item xs={12} sm={6} md={4} key={card.id}>
                        <MultiActionAreaCard
                          title={card.title}
                          description={card.description}
                          imageUrl={card.imageUrl}
                          // buttonText={card.buttonText}
                          onClick={() => setSelectedId(card.id)} // ส่งฟังก์ชันเพื่อจัดการการคลิก
                        />
                      </Grid>
                    ))}
                  </Grid>

                  <AnimatePresence>
                    {selectedId && (
                      <motion.div
                        layoutId={selectedId}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1,  }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="details" // เพิ่มคลาสสำหรับสไตล์
                      >
                        {/* <div>
                          {/* แสดงรายละเอียดของการ์ดที่เลือก 
                          <h2>{cards.find(card => card.id === selectedId).title}</h2>
                          <p>{cards.find(card => card.id === selectedId).description}</p>
                          <motion.button onClick={() => setSelectedId(null)}>Close</motion.button>
                        </div> */}
                        <Dialog
                    open={!!selectedId}
                    onClose={handleClose}
                    maxWidth="sm"
                    fullWidth
                  >
                    <DialogTitle>{cards.find(card => card.id === selectedId)?.title}</DialogTitle>
                    <DialogContent>
                      <img
                        src={cards.find(card => card.id === selectedId)?.imageUrl}
                        alt={cards.find(card => card.id === selectedId)?.title}
                        style={{ width: '100%', height: 'auto', marginBottom: '16px' }}
                      />
                      <p>{cards.find(card => card.id === selectedId)?.description}</p>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose} color="primary">
                        Close
                      </Button>
                    </DialogActions>
                  </Dialog>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* <ImageSlider images={webProjects} /> */}
                </div>
            </Stack>
        </Container>
    </Box>
  );
}
