import React from "react";
import AddCard from "../features/cards/AddCard";
import DeleteCard from "../features/cards/DeleteCard";
import CardList from "../features/cards/CardList";

function App() {
  return (
    <div className="App">
      <AddCard />
      <DeleteCard />
      <CardList />
    </div>
  );
}

export default App;
