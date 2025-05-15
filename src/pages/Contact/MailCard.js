import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MuiCard from '@mui/material/Card';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

export default function MailCard() {
  const [errors, setErrors] = React.useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const validateInputs = () => {
    
    const newErrors = {
      name: '',
      email: '',
      phone: '',
      message: '',
    };

    let isValid = true;

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name) {
      newErrors.name = 'Please enter your name.';
      isValid = false;
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }

    if (!phone || !/^\d{10,15}$/.test(phone)) {
      newErrors.phone = 'Please enter a valid phone number.';
      isValid = false;
    }

    if (!message) {
      newErrors.message = 'Please enter your message.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateInputs()) {
      const formData = new FormData(event.currentTarget);
      console.log({
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        message: formData.get('message'),
      });
    }
  };

  return (
    <Card variant="outlined">
      <Typography
        component="h1"
        variant="h4"
        sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
      >
        Contact Me
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}
      >
        <FormControl>
          <FormLabel htmlFor="name">Name</FormLabel>
          <TextField
            error={!!errors.name}
            helperText={errors.name}
            id="name"
            name="name"
            placeholder="Your name"
            required
            fullWidth
            variant="outlined"
          />
        </FormControl>
        
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <TextField
            error={!!errors.email}
            helperText={errors.email}
            id="email"
            name="email"
            placeholder="your@email.com"
            required
            fullWidth
            variant="outlined"
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="phone">Phone</FormLabel>
          <TextField
            error={!!errors.phone}
            helperText={errors.phone}
            id="phone"
            name="phone"
            placeholder="Your phone"
            required
            fullWidth
            variant="outlined"
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="message">Message</FormLabel>
          <TextField
            error={!!errors.message}
            helperText={errors.message}
            id="message"
            name="message"
            placeholder="Your message"
            required
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            InputProps={{
              style: { minHeight: '100px' }, // เพิ่มสไตล์เพื่อควบคุมความสูงขั้นต่ำ
            }}
          />
        </FormControl>

        <Button type="submit" fullWidth variant="contained">
          Submit
        </Button>
      </Box>
    </Card>
  );
}
