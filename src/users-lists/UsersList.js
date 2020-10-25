import React from 'react';
import './UsersList.scss';
import { User } from './user/User';

export class UsersList extends React.Component {

    constructor() {
        super();

        this.users = [
            {
                username: "Peter Parker",
                userhero: "Spiderman",
                powers: ["walk on walls", "swing web", "spider sense"]
            },
            {
                username: "Bruce Wayne",
                userhero: "Batman",
                powers: ["super rich", "super detective"]
            },
            {
                username: "Tony Stark",
                userhero: "Ironman",
                powers: ["Fly", "super intelliigence", "shoot missiles"]
            }
        ];
    }

    getUsers() {
        return this.users.map(user => <User 
            username={ user.username } 
            userhero={ user.userhero }></User>);
    }

    render() {
        return <div className="users-list">
            <h1>Users list</h1>

            { this.getUsers() }
        </div>;
    }
}

