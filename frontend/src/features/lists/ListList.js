import React  from "react";
import { connect } from "react-redux";
import List from "./List";

const wrapperStyle = {
  width: "100%",
  display: "flex",
  flexWrap: "wrap"
};

const wrapperDiv = {
  flex: "1 1 150px",
  marginTop: "5px",
  marginLeft: "10px"
};

const ListList = ({ lists, cards }) => {
  return (
    <div style={wrapperStyle}>
      {Object.values(lists).map((list, i) => (
        <div style={wrapperDiv}>
          <List
            key={list.id}
            {...list}
            cards={Object.values(cards).filter(
              card => parseInt(card.listId) === list.id
            )}
          />
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  lists: state.lists,
  cards: state.cards
});

export default connect(
  mapStateToProps,
  null
)(ListList);
