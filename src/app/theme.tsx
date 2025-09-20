'use client';

import { blue, green, orange, pink } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'var(--font-roboto)',
    },
    palette: {
        primary: blue,    // Синий как основной цвет
        secondary: pink,  // Розовый как дополнительный
        success: green,   // Зеленый для успеха
        warning: orange,  // Оранжевый для предупреждений
    },
});

export default theme;
