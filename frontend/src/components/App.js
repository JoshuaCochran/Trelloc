import React from "react";
import AddCard from "../features/cards/AddCard";
import DeleteCard from "../features/cards/DeleteCard";
import BoardList from "../features/boards/BoardList";
import AddBoard from "../features/boards/AddBoard";

function App() {
  return (
    <div className="App">
      <AddBoard />
      <AddCard />
      <DeleteCard />
      <BoardList />
    </div>
  );
}

export default App;
