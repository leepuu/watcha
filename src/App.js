import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './scss/_common.scss';
import Detail from './routes/Detail';
import Home from './routes/Home';


function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} exact={true} />
      <Route path="/detail" component={Detail} />
    </BrowserRouter>
  );
}

export default App;
