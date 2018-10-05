import React, { Component } from "react";
// import styled, { css } from "styled-components";
import { inject, observer } from "mobx-react";

class ColorSlider extends Component {
	render() {
		return (
			<div className={`slider ${this.props.color}`}>
				<label htmlFor={this.props.color}>{this.props.color}</label>
				<input 
					type="range" 
					value={this.props.value} 
					step={this.props.step || 1} 
					min={this.props.min} 
					max={this.props.max} 
					onChange={(e) => { this.props.handleChange(e.target.value, this.props.color); }} 
				/>
			</div>
		)
	}
}


@inject("MainStore")
@observer
class App extends Component {
	render() {
		console.log('initial render');
		const { MainStore } = this.props;
		const rgba = `rgba(${MainStore.colorValues.red}, ${MainStore.colorValues.green}, ${MainStore.colorValues.blue}, ${MainStore.colorValues.alpha})`;
		return (
			<div className="main" style={{backgroundColor: rgba, height: '100vh', width: '100vw'}}>

				<div className="color-sliders">

					<ColorSlider 
						color="red" 
						min="0" 
						max="255" 
						value={MainStore.colorValues.red} 
						handleChange={MainStore.setColor} 
					/>

					<ColorSlider 
						color="green" 
						min="0" 
						max="255" 
						value={MainStore.colorValues.green} 
						initial="127" 
						handleChange={MainStore.setColor} 
					/>

					<ColorSlider 
						color="blue" 
						min="0" 
						max="255" 
						value={MainStore.colorValues.blue} 
						handleChange={MainStore.setColor}
					/>

					<ColorSlider 
						color="alpha" 
						step="0.01" 
						min="0" 
						max="1" 
						value={MainStore.colorValues.alpha} 
						handleChange={MainStore.setColor} 
					/>

					<div className="color-display">
						{rgba}
					</div>

				</div>
			</div>
		);
	}
}

export default App;
