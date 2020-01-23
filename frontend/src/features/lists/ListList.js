import React, { useEffect } from "react";
import { connect } from "react-redux";
import List from "./List";
import AddListButton from "./AddListButton";
import { fetchLists } from "./listsSlice";
import { fetchCards } from "../cards/cardsSlice";

const scrollingWrapper = {
  display: "flex",
  overflowX: "auto",
  flexWrap: "nowrap",
  height: "calc(100vh - 45px)"
};

const ListList = ({ fetchLists, fetchCards, boardId, lists, cards }) => {
  useEffect(() => {
    fetchLists();
    fetchCards();
  }, []);

  return (
    <div style={scrollingWrapper}>
      {lists
        ? Object.values(lists)
            .sort((a, b) => a.position - b.position)
            .map((list, i) => (
              <List
                key={list.id}
                {...list}
                cards={Object.values(cards).filter(
                  card => card.listId === list.id
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

const mapDispatch = { fetchLists, fetchCards };

export default connect(mapStateToProps, mapDispatch)(ListList);
