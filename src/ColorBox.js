import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    const newValue = this.props.opacity - 0.1;
    return (
      this.props.opacity < 0.2 ? null : (

      )
      <div className="color-box" style={{opacity: this.props.opacity /*replace null with the value*/}}>
        <ColorBox opacity={newValue} />
      </div>
    )
  }

}

const newValue = this.props.value * 2;
    return this.props.value > 100 ? null : (
      <div>
        <Example value={newValue} />
      </div>
    );

