import React from 'react';
import { Container, Typography, Box, Button, Card, CardContent, LinearProgress, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const About = () => {
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
          <Box>
            <Typography variant="h4" align="left" sx={{}} gutterBottom>
              Greetings!
            </Typography>
            <Typography variant="body1" align="center" sx={{ fontSize: 15, }}>
              I'm Sanya Phoso (Nas), I am currently a programmer with a strong desire to become a software engineer in the future. I recently graduated with a degree in Computer Engineering and have a deep passion for software development. My interest in coding began during my vocational diploma studies, where I competed in a microcontroller programming skills competition. Since then, I’ve been captivated by the field as it constantly presents new challenges that inspire me to learn and grow.
            </Typography>
          </Box>

          {/* Section 2: Skills and Expertise */}
          <Box id="hero"
            sx={{
              width: '100%',
            }}
          >
            <Typography variant="h4" align="left" gutterBottom>Skills & Expertise</Typography>
            <Container maxWidth="md">

              <Card
                sx={{
                  width: '100%',
                  marginBottom: 2,
                }}>
                <CardContent>
                  <Typography variant="h6" >Programming</Typography>
                  <Typography variant="body1" >Python, Go, JavaScript, Node.js,  Express, HTML, CSS, React, TypeScript, Tailwind CSS, SQL, Next.js, PHP</Typography> 
                </CardContent>
              </Card>
              <Card
                sx={{
                  width: '100%',
                  marginBottom: 2,
                }}>
                <CardContent>
                  <Typography variant="h6">Tool</Typography>
                  <Typography variant="body1">Figma, Postman, GitHub, MySQL, Arduino IDE, Plesk, Navicat, Filezilla, MS Office</Typography>
                </CardContent>
              </Card>
            </Container>  
          </Box>

          {/* Section 4: Work Experience */}
          <Box id="hero"
            sx={{
              width: '100%',
            }}
          >
            <Typography variant="h4" align="left" gutterBottom>Work Experience</Typography>
            <Container maxWidth="md">

              <Card
                sx={{
                  width: '100%',
                  marginBottom: 2,
                }}>
                <CardContent>
                  <Typography variant="h6" >Programmer at Sahafarms co. ltd</Typography>
                  <Typography variant="body1" >October 2024 - Present</Typography>
                  <Typography variant="body1" >Develop eservice website.</Typography>
                  <Typography variant="body1" > Tech stack: PHP, HTML, CSS, JavaScript, MySQL.</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  width: '100%',
                  marginBottom: 2,
                }}>
                <CardContent>
                  <Typography variant="h6">Communication Electrician Intern at Wasu Group</Typography>
                  <Typography variant="body1">November 2020 - March 2021</Typography>
                  <Typography variant="body1">Install LAN cable, Install electrical wires, Install telephone line.</Typography>
                </CardContent>
              </Card>
            </Container>
          </Box>

          {/* Section 4: Education */}
          <Box id="hero"
            sx={{
              width: '100%',
            }}
          >
            <Typography variant="h4" align="left" gutterBottom>Education</Typography>
            <Container maxWidth="md">
              <Stack spacing={3} // ใช้ Stack เพื่อจัดระเบียบ Card
                sx={{
                  width: '100%', // ให้ Stack ขยายเต็มพื้นที่
                  alignItems: 'stretch', // ให้ Card ยืดเต็มแนวนอน
                }}
              >
                <Card sx={{ width: '100%' }}>
                  <CardContent>
                    <Typography variant="h6">King Mongkut's Institute of Technology Ladkrabang</Typography>
                    <Typography variant="body2">May 8, 2024</Typography>
                    <Typography variant="body1">Bachelor of Computer Engineering</Typography>
                    <Typography variant="body1">3.18 GPA</Typography>
                  </CardContent>
                </Card>

                <Card sx={{ width: '100%' }}>
                  <CardContent>
                    <Typography variant="h6">Minburi Technical Collage</Typography>
                    <Typography variant="body2">March 29, 2021</Typography>
                    <Typography variant="body1">Higher Vocational Education Diploma in Electronic</Typography>
                    <Typography variant="body1">3.73 GPA</Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Container>
          </Box>

          {/* CTA Section */}
          <Box sx={{ textAlign: 'center', }}>
            <Button variant="contained" sx={{ marginRight: 2 }}>View Resume</Button>
            <Button variant="contained" >Connect with Me</Button>
          </Box>
          {/* </Grid> */}
        </Stack>
      </Container>
    </Box>

  );
};

export default About;
