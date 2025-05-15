import * as React from 'react';
import DarkModeIcon from '@mui/icons-material/DarkModeRounded';
import LightModeIcon from '@mui/icons-material/LightModeRounded';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { useColorScheme } from '@mui/material/styles';

export default function ColorModeToggle(props) {
  const { mode, setMode } = useColorScheme();

  // ฟังก์ชันสลับธีม
  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  const icon = mode === 'light' ? <LightModeIcon /> : <DarkModeIcon />;

  return (
    <Box
      data-screenshot="toggle-mode"
      sx={(theme) => ({
        verticalAlign: 'bottom',
        display: 'inline-flex',
        width: '2.25rem',
        height: '2.25rem',
        borderRadius: (theme.vars || theme).shape.borderRadius,
        border: '1px solid',
        borderColor: (theme.vars || theme).palette.divider,
      })}
    >
      <IconButton
        data-screenshot="toggle-mode"
        onClick={toggleMode}
        disableRipple
        size="small"
        aria-label="Toggle color mode"
        {...props}
      >
        {icon}
      </IconButton>
    </Box>
  );
}
