import React, { Component } from "react";

export default class ColorInput extends Component {
  render(){
    return (
      <input className="color-display" value={this.props.value} onChange={(e) => { /* TODO */ return false; }} />
    )
  }
}