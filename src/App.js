import React from 'react';
import './App.scss';
import { UsersList } from './users-lists/UsersList';
import { ToggleButton } from './ToggleButton';

export class App extends React.Component {

  constructor() {
    super();
    
    this.state = {
      isLoggedIn: false,
    }
  }

  login() {
    this.setState({
      isLoggedIn: true
    })
  }

  render() {
    if(!this.state.isLoggedIn) {
      return <div className="App">
        Please login!
        <br/>
        <button onClick={() => this.login()}>Login</button>

        <ToggleButton showText="Help!" hideText="Close">
          <p>Explain how to login</p>
        </ToggleButton>
      </div>
    }

    return <div className="App">
      <UsersList></UsersList>
    </div>
  }
}
