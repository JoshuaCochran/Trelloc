import React from "react";
import { connect } from "react-redux";
import List from "./List";
import AddListButton from "./AddListButton";

const scrollingWrapper = {
  display: "flex",
  overflowX: "auto",
  flexWrap: "nowrap"
};

const ListList = ({ boardId, lists, cards }) => {
  return (
    <div style={scrollingWrapper}>
      {lists
        ? Object.values(lists).sort((a, b) => a.position - b.position).map((list, i) => (
            <List
              key={list.id}
              {...list}
              cards={Object.values(cards).filter(
                card => parseInt(card.listId) === list.id
              )}
            />
          ))
        : null}
      <AddListButton boardId={boardId} />
    </div>
  );
};

const mapStateToProps = state => ({
  cards: state.cards
});

export default connect(mapStateToProps, null)(ListList);
