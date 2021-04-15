import { useContext } from "react";
import { DataContext } from "./contexts/DataProvider";
import DisplayData from "./DisplayData";
import "./styles.css";

export default function App() {
  const { handleSubmit } = useContext(DataContext);

  return (
    <div className="App">
      <button onClick={handleSubmit}>Show Posts</button>
      <DisplayData />
    </div>
  );
}
