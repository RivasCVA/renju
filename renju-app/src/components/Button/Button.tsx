import React, { ReactNode } from 'react';
import './Button.css';

type Props = {
  children: ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

/** A multi-purpose basic button. */
export const Button = ({ children, onClick }: Props): JSX.Element => {
  return (
    <button className="Button" type="button" onClick={onClick}>
      {children}
    </button>
  );
};
