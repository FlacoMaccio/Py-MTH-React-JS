import { computeHeadingLevel } from '@testing-library/dom';
import React, { Component } from 'react';
import logo from '../assets/images/cart.svg';

class CarWidget extends Component {
    render () {
        return (
            <img alt="logo" className="logo" src={logo}></img>
        )
    }
}

export default CarWidget;