import React from 'react';
import { NavLink } from 'react-router-dom';

const learnClass = {
    textAlign: 'center',
    marginTop: 20,
    textDecoration: 'none',
    color: 'blue',
    fontSize: 12
};

const learnMore = props => (
    <NavLink style={learnClass} to={props.linkUrl}>learn more</NavLink>
);

export default learnMore;