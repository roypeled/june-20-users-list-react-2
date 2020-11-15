import React, { useState } from 'react';
import { UsersList } from './users-lists/UsersList';
import { ToggleButton } from './ToggleButton';
import './App.scss';
import { Post } from './users-lists/user/post/Post';
import { AppContext } from './AppContext';
import { Comments } from './users-lists/comments/Comments';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

export function App(props) {

  let [ isLoggedIn, setIsLoggedIn ] = useState(false);
  let [ selectedUser, setSelectedUser ] = useState(null);
  let [ selectedPost, setSelectedPost ] = useState(null);
  let [ activePage, setActivePage ] = useState(null);

  const appContextValue = {
    selectedUser,
    setSelectedUser,
    selectedPost,
    setSelectedPost,
    activePage,
    setActivePage
  }

  if(!isLoggedIn) {
    return <div className="App">
      Please login!
      <br/>
      <button onClick={() => setIsLoggedIn(true) }>Login</button>
    </div>
  }



  return <AppContext.Provider value={appContextValue}>
      <BrowserRouter>
        <div className="App">
          <Link to="/">Home</Link>
          <Link to="/users">Users List</Link>
        </div>

        <Switch>
          <Route path="/users">
            <UsersList></UsersList>
          </Route>
          <Route path="/">
            <h1>Welcome to my website</h1>
          </Route>
        </Switch>
    </BrowserRouter>
  </AppContext.Provider>
}

