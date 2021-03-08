import React, { ReactNode } from 'react';
import './GameBoard.css';

type Props = {
  children: ReactNode;
  onClick: (mouseX: number, mouseY: number) => void;
};

/** The Renju game board. All game pieces are taken in as children props. */
export const GameBoard = ({ children, onClick }: Props): JSX.Element => {
  const BOARD_SIZE = 15;

  const handleBoardClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const mouseX = event.pageX - event.currentTarget.offsetLeft;
    const mouseY = event.pageY - event.currentTarget.offsetTop;
    onClick(mouseX, mouseY);
  };

  const getSquare = (i = 0) => {
    return <div className="square" key={i} />;
  };

  // Builds the game board as a 2D array of square divs
  const buildBoard = () => {
    const board: JSX.Element[] = [];
    for (let i = 0; i < BOARD_SIZE; i += 1) {
      const row: JSX.Element[] = [];
      for (let j = 0; j < BOARD_SIZE; j += 1) {
        row.push(getSquare(j));
      }
      board.push(
        <div className="square-row" key={i}>
          {row}
        </div>
      );
    }
    return board;
  };

  return (
    <div className="GameBoard" onClick={handleBoardClick}>
      {buildBoard()}
      {children}
    </div>
  );
};
