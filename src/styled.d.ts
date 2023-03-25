import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      info: string;
      success: string;
      danger: string;
      error: string;
      black: {
        main: string;
        one: string;
        two: string;
      };
      white: {
        main: string;
        one: string;
        two: string;
        three: string;
      };
      gray: {
        one: string;
        two: string;
        three: string;
        four: string;
        five: string;
        six: string;
        seven: string;
        eight: string;
        nine: string;
        ten: string;
        eleven: string;
        twelve: string;
      };
    };
    fontSize: {
      small: string;
      normal: string;
      medium: string;
      big: string;
      heading: {
        one: string;
        two: string;
        three: string;
      };
    };
    fontWeight: {
      bold: string;
      semiBold: string;
      medium: string;
    };
  }
}
