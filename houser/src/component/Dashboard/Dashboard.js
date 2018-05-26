import React, { Component } from 'react';
import House from '../House/House';
import { Link } from 'react-router-dom';

export default class Dashboard extends Component {
    render() {
        console.log(this.props)
        return(
            <div> 
                Dashboard 
                <Link to='/wizard'>Add Property</Link>
                <House />
            </div>
        );
    }
}