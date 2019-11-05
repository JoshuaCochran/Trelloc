import React, { Fragment } from "react";
import { connect } from "react-redux";
import Board from "./Board";
import ConditionalWrapper from "../../components/ConditionalWrapper";

const rowStyle = {
  margin: "0 -5px"
};

const columnStyle = {
  float: "left",
  width: "25%",
  padding: "0 10px"
};

const afterRowStyle = {
  content: "",
  display: "table",
  clear: "both"
};

const BoardList = ({ boards, cards }) => {
  return (
    <>
      {Object.values(boards).map((board, i) => (
        <Fragment key={i}>
          <ConditionalWrapper
            condition={i % 4 === 0}
            wrapper={children => <div style={rowStyle}>{children}</div>}
          >
            <div style={columnStyle}>
              <Board
                key={board.id}
                {...board}
                cards={Object.values(cards).filter(
                  card => parseInt(card.boardId) === board.id
                )}
              />
            </div>
          </ConditionalWrapper>
          <div style={afterRowStyle} />
        </Fragment>
      ))}
    </>
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
