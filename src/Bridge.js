import React, { Component } from 'react';
import './Bridge.css';

const createBridge = (OriginalComponent, store) => {
  class Bridge extends Component {
    componentDidMount () {
      OriginalComponent.init(this.bridge, store);
    }

    render () {
      return (
        <div
          ref={bridge => {
            this.bridge = bridge;
          }}
          className="wrapper"
        />
      );
    }
  }
  return Bridge;
};

export default createBridge;
