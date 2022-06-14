/* eslint-disable @typescript-eslint/no-explicit-any */
const service = {
	// object find value
	getValue: (obj: any | undefined, key: string, defaultValue?: any | undefined): any => {
		if (!obj) {
			return defaultValue;
		}

		if (!key) {
			return defaultValue;
		}

		const keys = key.split('.');
		let value = obj;
		for (let i = 0, len = keys.length; i < len; i += 1) {
			const newValue = value[keys[i]];
			if (!newValue && typeof newValue !== 'number') {
				return defaultValue;
			}
			value = newValue;
		}
		return value;
	},
};

export default service;
