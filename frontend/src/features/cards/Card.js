import React from 'react'
import PropTypes from 'prop-types'

const cardStyle = {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    borderRadius: "5px",
    width: "200px",
    marginLeft: "10px",
    backgroundColor: "white"
}

const containerStyle = {
    padding: "2px 16px"
}

const Card = ({ title, description }) => (
    <div style={cardStyle}>
        <div style={containerStyle}>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    </div>
)

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default Card;