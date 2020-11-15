import React, { useState } from 'react';
import { UsersList } from './users-lists/UsersList';
import { ToggleButton } from './ToggleButton';
import './App.scss';
import { Post } from './users-lists/user/post/Post';
import { AppContext } from './AppContext';
import { Comments } from './users-lists/comments/Comments';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { About } from './about/About';

export function App(props) {

  let [ isLoggedIn, setIsLoggedIn ] = useState(false);
  let [ selectedPost, setSelectedPost ] = useState(null);

  const appContextValue = {
    selectedPost,
    setSelectedPost,
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
          <Link to="/about">About</Link>
        </div>

        <Switch>
          <Route path="/users">
            <UsersList></UsersList>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/post/:userId">
            <Post></Post>
          </Route>
          <Route path="/user/">
            details for user 12
          </Route>
          <Route path="/">
            <h1>Welcome to my website</h1>
          </Route>
        </Switch>
    </BrowserRouter>
  </AppContext.Provider>
}

