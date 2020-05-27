import React from 'react';

import { Link } from 'react-router-dom';

import './styles.css';

type CardProps = {
  id: string;
  src: string;
}

const Card: React.FC<CardProps> = ({ id }: CardProps) => {
  return (
    <Link to={`/image/${id}`} style={{ display: 'contents' }}>
      <div className="card">
        <div className="card__image" />
      </div>
    </Link>
  );
};

export default Card;
