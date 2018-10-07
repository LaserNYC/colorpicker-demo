import { action, observable } from "mobx";
import { convertToHex, convertToRgba } from './util';

class MainStore {

	@observable colorValues = {
		red: 127,
		green: 127,
		blue: 127,
		alpha: 1
	}

	@observable rgbaValue = 'rgba(127,127,127,1)';
	@observable hexCode = "#7F7F7F";

	@action setColor = (val, color) => {
		this.colorValues[color] = color === 'alpha' ? parseFloat(val, 10) : parseInt(val, 10);
		this.hexCode = convertToHex(this.colorValues);
		this.rgbaValue = convertToRgba(this.colorValues);
	};

}

export default new MainStore();
