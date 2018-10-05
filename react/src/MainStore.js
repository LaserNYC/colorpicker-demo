import { action, observable } from "mobx";

class MainStore {
	@observable colorValues = {
		red: 127,
		green: 127,
		blue: 127,
		alpha: 1
	}

	@action setColor = (val, color) => {
		this.colorValues[color] = color === 'alpha' ? parseFloat(val, 10) : parseInt(val, 10);
	};
}

export default new MainStore();
