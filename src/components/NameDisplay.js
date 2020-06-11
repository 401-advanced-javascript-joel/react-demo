import React from 'react';
import Child from './Child';

class NameDisplay extends React.Component {
  constructor() {
    super();
    this.state = { name: 'Sarah Smalls' };
  }

  handleInputChange = (e) => {
    let value = e.target.value;
    this.setState({ ...this.state, name: value });
  };

  render() {
    return (
      <>
        <h1>Enter your name</h1>
        <input
          type='text'
          value={this.state.name}
          onChange={this.handleInputChange}
        />
        <h2 className='welcome-message'>
          Welcome {this.state.name}! Do you like icecream?
        </h2>
        <Child />
      </>
    );
  }
}

export default NameDisplay;
