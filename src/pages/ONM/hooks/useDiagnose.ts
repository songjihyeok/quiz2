import { useState } from 'react';

export default function useDiagnose() {
	const [isVisibleTooltop, setIsVisibleTooltop] = useState<boolean>(false);

	const handleChangeVisible = (visible: boolean) => {
		setIsVisibleTooltop(visible);
	};

	return {
		isVisibleTooltop,
		handleChangeVisible,
	};
}
