// src/styles/theme.ts
export const theme = {
    colors: {
      background: '#476177',
      primary: '#0077b6',    // Azul vibrante como cor primária
    secondary: '#0096c7',  // Azul secundário para complementação
    accent: '#90ee90',     // Rosa suave para acentuações
    text: '#ffffff',       // Azul escuro para o texto principal
    textLight: '#ffffff',  // Branco para textos em fundos escuros
    danger: '#d00000'       
    },
    fonts: {
      main: "'Roboto', sans-serif", 
    },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.25rem',
      xl: '1.5rem'
    },
    spacing: (factor: number) => `${0.25 * factor}rem`, 
    borderRadius: '24px',
    breakpoints: {
      mobile: '480px',
      tablet: '768px',
      desktop: '1024px',
    }
  };
  