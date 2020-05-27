import React from 'react';

import './styles.css';

type CardProps = {
  src: string;
}

const Card: React.FC<CardProps> = ({ src }: CardProps) => {
  return (
    <div className="card">
      <img className="card__image" src={src} />
    </div>
  );
};

export default Card;
