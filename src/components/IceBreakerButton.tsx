import React from 'react';

interface IceBreakerButtonProps {
  onClick: () => void;
}

const IceBreakerButton: React.FC<IceBreakerButtonProps> = ({ onClick }) => {
  return (
    <button className="ice-breaker-button" onClick={onClick}>
      Ice-Breaker Question
    </button>
  );
};

export default IceBreakerButton;