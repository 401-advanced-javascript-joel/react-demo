import React from 'react';

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Sarah Smalls',
    };
  }

  onInputChange = (e) => {
    this.setState({ ...this.state, name: e.target.value });
  };

  render() {
    return (
      <div className='content'>
        <input type='text' onChange={this.onInputChange} />
        <h3>Welcome {this.state.name}</h3>
      </div>
    );
  }
}

export default Content;
