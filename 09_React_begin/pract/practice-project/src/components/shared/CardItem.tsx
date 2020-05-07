import React from 'react';

type CardItemProps = {
  image: string;
  author: string;
}

function CardItem(props: CardItemProps) {
  return (
    <div className="list__item">
      <img
        className="list__item_image"
        src={props.image}
        alt="meidtaion_image" />
      <h3 className="list__item_title">{props.author}</h3>
    </div>
  );
}

export default CardItem;
