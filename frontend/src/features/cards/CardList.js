import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Card from "./Card";

const CardList = ({ cards }) => (
  <div>
    {cards.map(card => (
      <Card key={card.id} {...card} />
    ))}
  </div>
);

const mapStateToProps = state => ({
  cards: state.cards
});

export default connect(
  mapStateToProps,
  null
)(CardList);
