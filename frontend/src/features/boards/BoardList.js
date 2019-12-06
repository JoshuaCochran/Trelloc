import React from "react";
import { connect } from "react-redux";
import { Button, Icon } from "antd";
import Board from "./Board";
import AddBoardButton from "./AddBoardButton";
import BoardButton from "./BoardButton"

const BoardList = ({ boards }) => {
  return (
    <div>
      <div>
        <Icon type="user" /> Personal Boards
      </div>
      {Object.values(boards).map((board, i) => (
        <BoardButton key={board.id} {...board} />
      ))}
      <AddBoardButton />
    </div>
  );
};

const mapStateToProps = state => ({
  boards: state.boards
});

export default connect(mapStateToProps, null)(BoardList);
