import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
      {'Copyright © '}
      <Link color="text.secondary" href="">
        Sanya Phoso
      </Link>
      &nbsp;
      2025
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 2, sm: 4 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 2, sm: 4 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <div>
          <Copyright />
        </div>
        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          sx={{ justifyContent: 'left', color: 'text.secondary' }}
        >

          <IconButton
            color="inherit"
            size="small"
            href="https://www.linkedin.com/in/sanya-phoso-4b4b3b199/"
            aria-label="LinkedIn"
            sx={{ alignSelf: 'center' }}
            target="_blank"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            color="inherit"
            size="small"
            href="https://github.com/sanyaphoso"
            aria-label="GitHub"
            sx={{ alignSelf: 'center' }}
            target="_blank"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            color="inherit"
            size="small"
            href="https://www.facebook.com/sanya.phoso.5/"
            aria-label="X"
            sx={{ alignSelf: 'center' }}
            target="_blank"
          >
            <FacebookIcon />
          </IconButton>

        </Stack>
      </Box>
    </Container>
  );
}
