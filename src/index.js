import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';
import App from 'components/App';

const theme = {
  colors: {
    main: 'silver',
    button: 'grey',
    good: 'green',
    neutral: 'orange',
    bad: 'red',
    statistics: 'black',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <App />
    <GlobalStyle />
  </ThemeProvider>
);
