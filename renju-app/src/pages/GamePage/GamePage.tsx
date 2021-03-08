import React, { useState } from 'react';
import { Button } from 'components/Button';
import { useHistory } from 'react-router-dom';
import { GameBoard } from './components/GameBoard';
import { GamePiece } from './components/GamePiece';
import './GamePage.css';

/** The main game page. All live game-related content will begin here. */
export const GamePage = (): JSX.Element => {
  const history = useHistory();
  const [pieces, setPieces] = useState<JSX.Element[]>([]);

  const goHome = () => {
    history.goBack();
  };

  // Rounds the given X and Y position to the nearest board intersection
  const roundPositionToCorner = (posX: number, posY: number) => {
    return [37 * Math.round(posX / 37), 37 * Math.round(posY / 37)];
  };

  const handleBoardClick = (posX: number, posY: number) => {
    const roundedPos = roundPositionToCorner(posX, posY);
    setPieces([
      ...pieces,
      <GamePiece
        posX={roundedPos[0]}
        posY={roundedPos[1]}
        key={pieces.length}
      />,
    ]);
  };

  return (
    <div className="GamePage">
      <Button onClick={goHome}>Go Home</Button>
      <h1 className="title">Game Page</h1>
      <GameBoard onClick={handleBoardClick}>{pieces}</GameBoard>
    </div>
  );
};
