import React, { useEffect } from 'react';
import { HomePage } from 'pages/HomePage';
import { GamePage } from 'pages/GamePage';
import './App.css';
import { Route, useHistory } from 'react-router-dom';

const App = (): JSX.Element => {
  const history = useHistory();

  useEffect(() => {
    history.push('/Home');
  }, [history]);

  return (
    <div>
      <Route path="/Home" component={HomePage} />
      <Route path="/Game" component={GamePage} />
    </div>
  );
};

export default App;
