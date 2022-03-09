import React, { useRef, useState } from "react";
import classes from "./Form.module.css";

const Form = (props) => {
  const [value, setValue] = useState("");
  const { searchFunc } = props;
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    searchFunc(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" placeholder="You can search" />
      <button type="submit">Search</button>
    </form>
  );
};

export default Form;
