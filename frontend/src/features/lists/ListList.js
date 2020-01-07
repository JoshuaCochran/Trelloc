import React, { useEffect } from "react";
import { connect } from "react-redux";
import List from "./List";
import AddListButton from "./AddListButton";
import { addList } from "./listsSlice";
import { addCard } from "../cards/cardsSlice";
import axios from "axios";

const scrollingWrapper = {
  display: "flex",
  overflowX: "auto",
  flexWrap: "nowrap"
};

const ListList = ({ addList, addCard, boardId, lists, cards }) => {
  useEffect(() => {
    axios.get("http://localhost:8082/api/lists").then(res => {
      res.data.map(list => {
        addList(list._id, list.boardId, list.title, list.position);
      });
    });

    axios.get("http://localhost:8082/api/cards").then(res => {
      res.data.map(card => {
        addCard(card._id, card.listId, card.title, card.description, card.position);
      });
    });
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

const mapDispatch = { addList, addCard };

export default connect(mapStateToProps, mapDispatch)(ListList);
