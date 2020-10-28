import React from 'react';
import './User.scss';
import { ToggleButton } from '../../ToggleButton';

export class User extends React.Component {

    constructor() {
        super();
    }

    sayHello() {
        alert('hello from ' + this.props.name);
    }

    render() {
        return <div className="user-component">
            <h2>{ this.props.name }</h2>
           
            <ToggleButton showText="Show details" hideText="Hide details">
                <strong>{ this.props.email }</strong>
                <div>
                    {
                        this.props.address.city
                    }
                </div>
                <button onClick={() => this.sayHello() }>Say hello!</button>
            </ToggleButton>
        </div>
    }
}