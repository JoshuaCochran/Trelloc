import React from "react";
import 'antd/dist/antd.css';
import AddCard from "../features/cards/AddCard";
import DeleteCard from "../features/cards/DeleteCard";
import ListList from "../features/lists/ListList";
import AddListButton from "../features/lists/AddListButton";

function App() {
  return (
    <div className="App">
      <AddListButton />
      <ListList />
    </div>
  );
}

export default App;
