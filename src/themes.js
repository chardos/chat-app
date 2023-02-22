export const themes = {
  red: {
    background: '#F07D7D',
    dark: '#681010',
    light: '#ffe5e5',
  },
  green: {
    background: '#A2F9A8',
    dark: '#0B6A5D',
    light: '#E0FFE2',
  },
  blue: {
    background: '#7472CC',
    dark: '#0D0B5B',
    light: '#CECDf6',
  },
};

export const getRandomTheme = () => {
  const themeNames = ['red', 'green', 'blue'];
  return themes[themeNames[Math.floor(Math.random() * themeNames.length)]];
};
