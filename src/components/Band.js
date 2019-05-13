import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <li>
        <h1>{this.props.name}</h1>
        <button onClick={() => this.props.deleteBand(this.props.name)} />
      </li>
    );
  }
};

export default Band;
