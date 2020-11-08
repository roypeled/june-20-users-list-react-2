import React, { useState, useEffect } from 'react';
import './UsersList.scss';
import { User } from './user/User';

async function fetchUsers() {
    const result = await fetch('https://jsonplaceholder.typicode.com/users/');
    return result.json();
}

export function UsersList(props) {

    const [users, setUsers] = useState([]);

    useEffect(async () => {
        const result = await fetchUsers();
        setUsers(result);
    }, []);

    if (users.length <= 0) {
        return <div>Loading Users...</div>
    }

    return <div className="users-list">
        <h1>Users list</h1>

        <div className="list">
            { 
                users.map(user => <User 
                    name={ user.name } 
                    email={ user.email }
                    address={ user.address }
                    companyName={ user.company.name }></User>)
            }
        </div>
    </div>;
}

