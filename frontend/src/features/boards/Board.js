import React from "react";
import { connect } from "react-redux";
import ListList from "../lists/ListList";

const Board = ({ id, lists }) => {
  return (
    <div>
      <ListList
        boardId={id}
        lists={Object.values(lists).filter(
          list => parseInt(list.boardId) === parseInt(id)
        )}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps, null)(Board);
