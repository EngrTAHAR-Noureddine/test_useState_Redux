import React, { Component } from 'react';

export default class Add extends Component {

    

    render() {
        return (
            <div>
                <input className="add" type="submit" value="Add" 
                onClick={this.props.Increment}/>
            </div>
        )
    }
}