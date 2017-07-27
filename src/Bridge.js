import React, { Component } from 'react';

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
        />
      );
    }
  }
  return Bridge;
};

export default createBridge;
