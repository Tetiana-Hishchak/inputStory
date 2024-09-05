import { withThemeByClassName } from '@storybook/addon-themes';
import './style.css'; // Подключение вашего файла стилей

export const decorators = [
  withThemeByClassName({
    themes: {
      light: 'theme-light',
      dark: 'theme-dark',
    },
    defaultTheme: 'light',
  }),
];

export const parameters = {
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#ffffff' },
      { name: 'dark', value: '#000000' },
    ],
  },
};



