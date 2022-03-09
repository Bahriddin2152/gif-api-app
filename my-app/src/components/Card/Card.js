import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  const { gif } = props;

  return (
    <div className={classes.card}>
      <img src={gif.images.downsized.url} />
      <h3>{gif.title}</h3>
    </div>
  );
};

export default Card;
