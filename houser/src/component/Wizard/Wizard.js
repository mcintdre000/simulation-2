import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { updateHouse } from '../../ducks/reducer';

class Wizard extends Component {

    render() {
        const { updateName } = this.props;
        console.log(this.state)
        return(
            <div> 
                Wizard 
                <input name='name' placeholder="Name" onChange={event => this.handleUserInput(event)}></input>
                <input name='address' placeholder="Address" onChange={event => this.handleUserInput(event)}></input>
                <input placeholder="City"></input>
                <input placeholder="State"></input>
                <input placeholder="Zipcode"></input>
                <input placeholder="Mortgage"></input>
                <input placeholder="Rent"></input>
                <button onClick={}> Complete </button>
                <button onClick={() => this.props.history.goBack()}> Cancel </button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { name }= state;

    return {
        state
    };
}

export default connect( mapStateToProps, { updateName } )( Wizard );