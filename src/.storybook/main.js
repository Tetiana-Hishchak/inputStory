/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook-custom-theme-switcher",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    // Додайте ваш CSS файл до конфігурації Vite
    config.plugins.push({
      name: 'load-css',
      apply: 'serve',
      load(id) {
        if (id.endsWith('styles.css')) {
          return `@import "${id}";`;
        }
      }
    });
    return config;
  },
};

// // Імпорт стилів
// import '../src/styles.css';

export default config;


// import React from 'react';
// import { Theme } from '../../../app/providers/ThemeProvider';

// export const ThemeDecorator = (theme: Theme) => (Story: any) => {
// 	return (
// 		<div className={`app wrapper ${theme}`}>
// 			<Story />
// 		</div>
// 	);
// };
