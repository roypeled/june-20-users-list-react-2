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
            userhero={ user.userhero }
            powers={ user.powers }></User>);
    }

    createHero(e) {
        e.preventDefault();
        alert("Create hero!" + this.heroName);
    }

    heroNameChange(e) {
        this.heroName = e.target.value;
    }

    render() {
        return <div className="users-list">
            <h1>Users list</h1>

            <div className="list">
                <div>
                    { this.getUsers() }
                </div>

                <form onSubmit={(e) => this.createHero(e)}>
                    <fieldset>
                        <legend>Create Hero</legend>
                        <input onChange={(e) => this.heroNameChange(e) } placeholder="Hero name"></input>
                        <button>Create!</button>
                    </fieldset>
                </form>
            </div>

        
        </div>;
    }
}

