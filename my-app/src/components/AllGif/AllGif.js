import React from "react";
import Card from "../Card/Card";

const Allgif = (props) => {
  const { data: gifs } = props;

  if (gifs.length > 0) {
    return gifs.map((item, index) => {
      return <Card key={index} gif={item} />;
    });
  }
  return <div></div>;
};

export default Allgif;
