// .storybook/preview.js
// import '../src/styles.css';

// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
    
//   },
// };

// import '../src/styles.css';
// import { themes } from '@storybook/theming';

// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
//   darkMode: {
//     // Устанавливаем темную тему как стандартную
//     current: 'dark',
//     // Определяем светлую и темную темы с правильным цветом текста
//     dark: { 
//       ...themes.dark, 
//       appBg: '#333', 
//       appContentBg: '#2c2c2c', 
//       textColor: '#ffffff', // Устанавливаем белый цвет текста для темной темы
//     },
//     light: { 
//       ...themes.normal, 
//       appBg: '#fff', 
//       appContentBg: '#f0f0f0', 
//       textColor: '#333', // Устанавливаем черный цвет текста для светлой темы
//     },
//   },
// };

// import '../src/styles.css';
// import { themes } from '@storybook/theming';
// import { addDecorator } from '@storybook/react';
// import { withGlobalStyles } from './withGlobalStyles';

// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
//   darkMode: {
//     current: 'dark',
//     dark: { ...themes.dark, appBg: '#333', appContentBg: '#2c2c2c', textColor: '#ffffff' },
//     light: { ...themes.normal, appBg: '#fff', appContentBg: '#f0f0f0', textColor: '#333' },
//   },
// };

// // Декоратор для установки глобальних стилів
// addDecorator(withGlobalStyles);

// function withGlobalStyles(StoryFn) {
//   return (
//     <div style={{ color: 'white', backgroundColor: '#2c2c2c' }}>
//       <StoryFn />
//     </div>
//   );
// }


// import '../src/styles.css';
import { themes } from '@storybook/theming';
import { useEffect } from 'react';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  theme: {
    selector: "body",
    dataAttr: "data-theme",
    /* Put all theme options in
    themeOptions. You can name
    customeTheme as you want.*/
    themeOptions: {
      default: "", // empty string for option to get back to default theme 
      customeTheme1: "light",
      customeTheme2: "dark",
    },
    defaultTheme: "light",
  },

};


// .storybook/preview.ts
// import { withThemeByClassName } from '@storybook/addon-themes';

// export default {
//   decorators: [
//     withThemeByClassName({
//       themes: {
//         light: 'light-theme',
//         dark: 'dark-theme',
//       },
//       defaultTheme: 'light',
//     }),
//   ],
// };

