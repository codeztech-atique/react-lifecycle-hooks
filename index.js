import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Counters from './counters';
import './style.css';

class App extends Component {
  constructor(props) {
    super();
    this.state = { count: 0 };
    console.log('App constructor');
  }

  componentDidMount() {
    console.log('App component did mount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('App component did update');
    console.log('App component prevProps', prevProps);
    console.log('App component prevState', prevState);
  }

  componentWillMount() {
    // It is just like constructor, so it is deprecated
    console.log('componentWillMount called');
  }

  componentWillUnMount() {
    // Once the component will unmont it will never be mount again - Until its create fresh instance
    // Mainly used to clean the invalidating time, cancling network calls.

    // And Clean up any subscription that are created in componentDidMount

    // Ran local, change the component and save in order to see the result.
    // This is also deprecated
    console.log('componentWillUnMount called');
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log('App component rendered');
    return (
      <div>
        <Hello name="Pesto" />
        <button onClick={this.handleIncrement}>Change state</button>
        <Counters />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
