import React, { useState } from 'react';
import { UsersList } from './users-lists/UsersList';
import { ToggleButton } from './ToggleButton';
import './App.scss';

export function App(props) {

  let [ isLoggedIn, setIsLoggedIn ] = useState(false);

  if(!isLoggedIn) {
    return <div className="App">
      Please login!
      <br/>
      <button onClick={() => setIsLoggedIn(true) }>Login</button>
    </div>
  }

  return <div className="App">
    <UsersList></UsersList>
  </div>
}

