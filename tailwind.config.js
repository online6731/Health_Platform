const dynamicColors = ['amber', 'purple', 'emerald', 'blue', 'rose', 'teal'];

const dynamicUtilities = dynamicColors.flatMap((color) => [
  `border-${color}-500`,
  `border-${color}-500/30`,
  `border-t-${color}-500`,
  `border-r-${color}-500`,
  `bg-${color}-100`,
  `bg-${color}-500`,
  `bg-${color}-500/5`,
  `bg-${color}-500/10`,
  `dark:bg-${color}-900/30`,
  `text-${color}-400`,
  `text-${color}-500`,
  `text-${color}-600`,
  `dark:text-${color}-400`,
  `from-${color}-500/5`,
  `hover:bg-${color}-500/5`,
  `hover:border-${color}-400`,
  `hover:border-${color}-500/30`,
  `shadow-${color}-500/20`,
  `shadow-${color}-500/25`,
]);

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  corePlugins: {
    preflight: false,
  },
  safelist: dynamicUtilities,
};
