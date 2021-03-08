import React from 'react';
import './GamePiece.css';

type Props = {
  posX: number;
  posY: number;
};

/** The Renju board pieces. Also known as suns, stones, or Go pieces. */
export const GamePiece = ({ posX, posY }: Props): JSX.Element => {
  return <div style={{ left: posX, top: posY }} className="GamePiece" />;
};
