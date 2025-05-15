import * as React from 'react';
import { Typography, Link, IconButton, Box, Container, Stack, useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { Facebook, LinkedIn, GitHub } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

function Home() {   
    const theme = useTheme();
    
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
                // sx={{
                //     display: 'flex',
                //     flexDirection: 'column',
                //     alignItems: 'center',
                //     pt: { xs: 14, sm: 20 },
                //     // pt: { xs: 20, sm: 50 },
                //     pb: { xs: 8, sm: 12 },
                // }}
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
                    {/* <Grid container spacing={1} sx={{ textAlign: 'left', position: 'relative', width: '100%', }}> */}
                        {/* Section for Introduction with Framer Motion */}
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img
                                    src="./images/sanya.jpg"
                                    alt="[คำอธิบายของรูป]"
                                    style={{ width: '40%', borderRadius: '8px', marginBottom: '16px',}}
                                />
                            </div>  
                        </motion.div>

                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <Typography variant="h3" gutterBottom
                            sx={{
                                textAlign: 'center', // จัดข้อความให้อยู่ตรงกลาง (ถ้าต้องการ)
                            }}>
                                Hello I'm Sanya [ Nas ]
                            </Typography>
                            {/* <Typography variant="body1">
                        I am a recent graduate majoring in Computer Engineering with a passion for software development. During my vocational diploma studies, I had the opportunity to participate in a microcontroller programming skills competition, which sparked my interest in coding. Since then, I’ve been drawn to this field as it constantly presents new challenges that encourage me to learn and grow.
                    </Typography> */}
                            <Typography variant="body1" 
                            sx={{   
                                width: '100%', // ขยายเต็มพื้นที่
                                fontSize: 20,
                                textAlign: 'center', // จัดข้อความให้อยู่ตรงกลาง (ถ้าต้องการ)
                            }}>
                                I'm a Programmer with a passion for building efficient and innovative solutions. My goal is to create impactful applications that enhance user experience while pushing the boundaries of technology.
                                <Link
                                component={RouterLink}
                                to="/about"
                                underline="hover"
                                sx={{
                                    // py: 2,
                                    color: 'blue',
                                    fontSize: 20,
                                    marginLeft: '5px',
                                }}>
                                see more.
                            </Link>
                            </Typography>

                            <div
                            sx={{
                                textAlign: 'center'
                                
                            }}>

                            
                            </div>
                            
                            <Box
                                sx={{
                                    display: 'flex',
                                    mt: 2,
                                }}
                            >
                                <IconButton href="https://www.linkedin.com/in/sanya-phoso-4b4b3b199/" target="_blank"
                                    sx={{
                                        fontSize: 30,
                                        margin: 1,
                                    }}>
                                    <LinkedIn sx={{ fontSize: 'inherit' }} />
                                </IconButton>
                                <IconButton href="https://github.com/sanyaphoso" target="_blank"
                                    sx={{
                                        fontSize: 30,
                                        margin: 1,
                                    }}>
                                    <GitHub sx={{ fontSize: 'inherit' }} />
                                </IconButton>
                                <IconButton href="https://www.facebook.com/sanya.phoso.5/" target="_blank"
                                    sx={{
                                        fontSize: 30,
                                        margin: 1,
                                    }}>
                                    <Facebook sx={{ fontSize: 'inherit' }} />
                                </IconButton>

                            </Box>
                        </motion.div>
                </Stack>
            </Container>
        </Box>


    );
}
    
export default Home;

