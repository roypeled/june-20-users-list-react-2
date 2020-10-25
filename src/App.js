import React from 'react';
import './App.scss';
import { UsersList } from './users-lists/UsersList';

export class App extends React.Component {
  render() {
    return <div className="App">
      <UsersList></UsersList>
    </div>
  }
}
