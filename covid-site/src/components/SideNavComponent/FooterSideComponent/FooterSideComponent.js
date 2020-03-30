import React from 'react'
import './FooterSideComponent.scss';

const FooterSideComponent = props => {
    return (
        <footer className="FooterSideComponent">
            {props.children}
        </footer>
    );
};

export default FooterSideComponent;
