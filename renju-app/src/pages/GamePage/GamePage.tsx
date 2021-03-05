import React from 'react';
import { Button } from 'components/Button';
import { useHistory } from 'react-router-dom';
import './GamePage.css';

export const GamePage = (): JSX.Element => {
  const history = useHistory();

  const handleOnClick = () => {
    history.goBack();
  };

  return (
    <div className="GamePage">
      <h1 className="Title">Game Page</h1>
      <Button onClick={handleOnClick}>Go Home</Button>
    </div>
  );
};
