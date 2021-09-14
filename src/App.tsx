import React from 'react';
import { GlobalStyle } from './styles/global';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </div>
  );
}

export default App;
