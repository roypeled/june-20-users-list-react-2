import React from 'react';
import './UsersList.scss';
import { User } from './user/User';

export class UsersList extends React.Component {

    constructor() {
        super();

        this.state = {
            users: [],
        };

        this.init();
    }

    async init() {
        const users = await this.fetchUsers();
        this.setState({ users: users });

        setTimeout(() => this.init(), 5000);
    }

    async fetchUsers() {
        const result = await fetch('https://jsonplaceholder.typicode.com/users/');
        return result.json();
    }

    render() {
        if (this.state.users.length <= 0) {
            return <div>Loading Users...</div>
        }

        return <div className="users-list">
            <h1>Users list</h1>

            <div className="list">
                <div>
                    { 
                        this.state.users.map(user => <User 
                            name={ user.name } 
                            email={ user.email }
                            address={ user.address }></User>)
                    }
                </div>
            </div>
        </div>;
    }
}

