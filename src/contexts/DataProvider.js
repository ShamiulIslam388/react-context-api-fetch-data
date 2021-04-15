import React, { createContext, useState } from "react";

export const DataContext = createContext();
export const DataProvider = (props) => {
  let [posts, setPosts] = useState([]);
  const handleSubmit = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json))
      .catch((error) => console.log("error"));
  };
  return (
    <DataContext.Provider value={{ posts, setPosts, handleSubmit }}>
      {props.children}
    </DataContext.Provider>
  );
};
