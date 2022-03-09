import React, { useState, useEffect, useReducer } from "react";
import Container from "./UI/Container/Container";
import Row from "./UI/Row/Row";
import AllGif from "./components/AllGif/AllGif";
import Form from "./components/Form/Form";

const initialData = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCHING":
      return action.value;

    default:
      return state;
  }
};
function App() {
  const [data, dispatch] = useReducer(reducer, initialData);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, [search]);

  async function fetchData() {
    try {
      let res;
      if (search.trim().length !== 0) {
        res = await fetch(
          `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=3YnqyDf7vUiCcGxPYHcLKua8BS5mSG2r&limit=12`
        );
      }
      if (search.trim().length === 0) {
        res = await fetch(
          "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=3YnqyDf7vUiCcGxPYHcLKua8BS5mSG2r&limit=12"
        );
      }

      if (!res.ok) {
        throw new Error("Wrong something");
      }
      const fetchData = await res.json();
      dispatch({ type: "FETCHING", value: fetchData.data });
    } catch (err) {
      console.log(err);
    }
  }

  function searchFunc(value) {
    setSearch((prevState) => (prevState = value));
  }

  return (
    <Container>
      <Form searchFunc={searchFunc} />
      <Row>
        <AllGif data={data} />
      </Row>
    </Container>
  );
}

export default App;
