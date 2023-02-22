import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import { router } from './router';
import { useState } from 'react';
import { getRandomTheme } from './themes';

function App() {
  const [theme] = useState(getRandomTheme());
  console.log('theme', theme);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
