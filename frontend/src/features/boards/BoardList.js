import React from "react";
import { connect } from "react-redux";
import { Icon } from "antd";
import AddBoardButton from "./AddBoardButton";
import BoardButton from "./BoardButton";

const headerStyle = {
  color: "white",
  fontSize: "24px",
  lineHeight: "20px",
  fontWeight: 400,
}

const buttonContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  flexGrow: 1,
  minHeight: "100%",
  width: "100%"
};

const buttonStyle = {
  width: "calc(50% - 4px)",
  marginRight: "4px",
  marginBottom: "4px",
}

const BoardList = ({ boards }) => {
  return (
    <div>
      <div>
        <p style={headerStyle}>
          <Icon type="user" /> Personal Boards
        </p>
      </div>
      <div style={buttonContainerStyle}>
        {Object.values(boards).map((board, i) => (
          <div style={buttonStyle} key={i+board.id}>
            <BoardButton key={board.id} {...board} />
          </div>
        ))}
        <div style={buttonStyle}>
          <AddBoardButton />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  boards: state.boards
});

export default connect(mapStateToProps, null)(BoardList);
