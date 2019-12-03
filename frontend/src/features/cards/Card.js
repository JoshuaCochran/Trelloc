import React from "react";
import PropTypes from "prop-types";
import { Card } from "antd";

const cardStyle = {
  borderRadius: "3px"
};

const containerStyle = {
  padding: "2px 16px"
};

const Card = ({ title, description }) => (
    <Card title={title} style={cardStyle}></Card>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Card;
