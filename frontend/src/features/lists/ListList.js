import React, { useEffect } from "react";
import { connect } from "react-redux";
import List from "./List";
import AddListButton from "./AddListButton";
import { addList } from "./listsSlice";
import axios from "axios";

const scrollingWrapper = {
  display: "flex",
  overflowX: "auto",
  flexWrap: "nowrap"
};

const ListList = ({ addList, boardId, lists, cards }) => {
  useEffect(() => {
    axios.get("http://localhost:8082/api/lists").then(res => {
      console.log(res);
      res.data.map(list => {
        console.log(list);
        addList(list._id, list.boardId, list.title, list.position);
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

const mapDispatch = { addList };

export default connect(mapStateToProps, mapDispatch)(ListList);
