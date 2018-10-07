import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { SliderModel } from './SliderModel';
import ColorInput from './ColorInput';


@inject('MainStore')
@observer
export default class ColorSliders extends Component {
	render(){
		return (
			<div className="color-sliders" style={{ backgroundColor: this.props.MainStore.rgbaValue}}>
				 { Object.keys(SliderModel).map((color) => {
					return (
						<div className={`slider ${color}`} key={color}>
							<label htmlFor={color}>{color}</label>
							<input 
								type="range" 
								value={this.props.MainStore.colorValues[color]} 
								step={SliderModel[color].step} 
								min="0" 
								max={SliderModel[color].max} 
								onChange={(e) => { this.props.MainStore.setColor(e.target.value, color); }} 
							/>
						</div>
					)
				}) }

				 <ColorInput value={this.props.MainStore.rgbaValue} />
				 <ColorInput value={this.props.MainStore.hexCode} />

			</div>
		)
	}
}