import React, { useContext } from "react";
import { DataContext } from "./contexts/DataProvider";

const DisplayData = () => {
  const { posts } = useContext(DataContext);
  return (
    <div>
      {posts.map((post) => {
        const { title, body, id } = post;
        return (
          <React.Fragment key={id}>
            <h4>{title}</h4>
            <p>{body}</p>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default DisplayData;
