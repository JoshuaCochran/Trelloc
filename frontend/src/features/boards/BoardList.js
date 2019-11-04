import React from "react";
import { connect } from "react-redux";
import Board from "./Board";

const BoardList = ({ boards, cards }) => {
  return (
    <div>
      {Object.values(boards).map(board => (
        <Board
          key={board.id}
          {...board}
          cards={Object.values(cards).filter(
            card => parseInt(card.boardId) === board.id
          )}
        />
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
