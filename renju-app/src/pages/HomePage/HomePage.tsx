import React from 'react';
import { Button } from 'components/Button';
import { useHistory } from 'react-router-dom';
import './HomePage.css';

/** The landing home page. */
export const HomePage = (): JSX.Element => {
  const history = useHistory();

  const handleOnClick = () => {
    history.push('/Game');
  };

  return (
    <div className="HomePage">
      <h1 className="title">Renju</h1>
      <Button onClick={handleOnClick}>Begin</Button>
    </div>
  );
};
