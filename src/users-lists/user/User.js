import React from 'react';
import './User.scss';

export class User extends React.Component {
    render() {
        return <div className="user-component">
            <h2>{ this.props.username }</h2>
            <strong>{ this.props.userhero }</strong>
            <ul>
                <li>Super power</li>
            </ul>
        </div>
    }
}