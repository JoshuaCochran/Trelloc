import React from "react";
import "../css/App.css";
import AddCard from "../features/cards/AddCard";
import DeleteCard from "../features/cards/DeleteCard";

function App() {
  return (
    <div className="App">
      <AddCard />
      <DeleteCard />
    </div>
  );
}

export default App;
