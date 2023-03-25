import { DefaultTheme } from 'styled-components';

const lightTheme: DefaultTheme = {
  colors: {
    primary: '#057AC8',
    secondary: '#F1F2F5',
    info: '#2F80ED',
    success: '#27AE60',
    danger: '#E2B93B',
    error: '#EB5757',
    black: {
      main: '#000000',
      one: '#191919',
      two: '#262626',
    },
    white: {
      main: '#FFFFFF',
      one: '#FAFAFA',
      two: '#F4F4F4',
      three: '#F1F1F1',
    },
    gray: {
      one: '#D9D9D9',
      two: '#CCCCCC',
      three: '#BFBFBF',
      four: '#BFBFBF',
      five: '#B2B2B2',
      six: '#999999',
      seven: '#8C8C8C',
      eight: '#808080',
      nine: '#737373',
      ten: '#666666',
      eleven: '#595959',
      twelve: '#4D4D4D',
    },
  },
  fontSize: {
    small: '0.875rem',
    normal: '1rem',
    medium: '1.125rem',
    big: '2rem',
    heading: {
      one: '3.5rem',
      two: '3rem',
      three: '2.5rem',
    },
  },
  fontWeight: {
    bold: '700',
    semiBold: '600',
    medium: '500',
  },
};

export { lightTheme };
