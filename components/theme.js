// May be we can use emotion later.
// So, with this, we don't need to change into all of the components.
// Just change 'styled-components' to 'emotion-theming'
import { ThemeProvider } from 'styled-components';

export { ThemeProvider };

// Rest of the theme
const Revix = {
  colors: {
    primary: '#212EEE',
    secondary: '#9096F6',
    red: '#FF430E',
    whitebg: '#E5E5E5',
    darkpurple: '#9421EE',
    lightpurple: '#EE21E6',
    green: '#21EE73',
    yellow: '#FFCA39',
    typedark: '#101239',
    typedarkgray: '#9BA1BE',
    typelightgray: '#C7C4DA',
  },

  grid: {
    size: 12,
    gutter: 10, // 10px
    outerMargin: 1,
    breakpoints: {
      xs: 0, // px
      sm: 768, // px
      md: 960, // px
      lg: 1200, // px
    },
  },
};

export default Revix;
