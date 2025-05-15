import * as React from 'react';
import { Typography, IconButton, Box, Stack, } from '@mui/material';
import { Facebook, LinkedIn, GitHub } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const items = [
  {
    icon: <EmailIcon sx={{ color: 'text.secondary' }} />,
    title: 'Email: sanyazza.nat@gmail.com',
    description:
      '',
  },
  {
    icon: <PhoneIcon sx={{ color: 'text.secondary' }} />,
    title: 'Phone 062-xxx-xxxx',
    description:
      '',
  },
  
];

export default function Content() {
  return (
    <Stack
      sx={{ flexDirection: 'column', alignSelf: 'center', gap: 4, maxWidth: 450 }}
    >
      {/* <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <SitemarkIcon />
      </Box> */}
      {items.map((item, index) => (
        <Stack key={index} direction="row" sx={{ gap: 2 }}>
          {item.icon}
          <div>
            <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {item.description}
            </Typography>
          </div>
        </Stack>
      ))}
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
    </Stack>
  );
}
