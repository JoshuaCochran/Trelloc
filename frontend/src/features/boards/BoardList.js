import React  from "react";
import { connect } from "react-redux";
import Board from "./Board";

const wrapperStyle = {
  width: "100%",
  display: "flex",
  flexWrap: "wrap"
};

const wrapperDiv = {
  flex: "1 1 150px",
  marginTop: "5px"
};

const BoardList = ({ boards, cards }) => {
  return (
    <div style={wrapperStyle}>
      {Object.values(boards).map((board, i) => (
        <div style={wrapperDiv}>
          <Board
            key={board.id}
            {...board}
            cards={Object.values(cards).filter(
              card => parseInt(card.boardId) === board.id
            )}
          />
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  boards: state.boards,
  cards: state.cards
});

export default connect(
  mapStateToProps,
  null
)(BoardList);
