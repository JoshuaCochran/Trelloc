import React from "react";
import { connect } from "react-redux";
import List from "./List";
import AddListButton from "./AddListButton";

const scrollingWrapper = {
  display: "flex",
  overflowX: "auto",
  flexWrap: "nowrap"
};

const ListList = ({ lists, cards }) => {
  return (
    <div style={scrollingWrapper}>
      {Object.values(lists).map((list, i) => (
        <List
          key={list.id}
          {...list}
          cards={Object.values(cards).filter(
            card => parseInt(card.listId) === list.id
          )}
        />
      ))}
      <AddListButton/>
    </div>
  );
};

const mapStateToProps = state => ({
  lists: state.lists,
  cards: state.cards
});

export default connect(mapStateToProps, null)(ListList);
