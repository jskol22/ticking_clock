
import React, { Component } from 'react';
import SubContent from './subcontent';
import Advertisement from './advertisement';

class Main extends Component {
  render() {
    return <div className="main">
      <SubContent />
      <SubContent />
      <SubContent />
      <Advertisement />
    </div>;
  }
}

export default Main;