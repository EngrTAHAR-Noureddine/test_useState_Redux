import React, { Component } from 'react';

export default class Remove extends Component {
    render() {
        return (
            <div>
                <input className="remove" type="submit" value="remove"  onClick={this.props.decrement}/>
            </div>
        )
    }
}
