import * as React from 'react';
import { Container, Typography, IconButton, Box, Button, Card, CardContent, LinearProgress, Stack } from '@mui/material';
import MailCard from './MailCard';
import Content from './Content';

export default function Contact(props) {
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
        <Content />
        <MailCard />
      </Container>
    </Box >
  );
}