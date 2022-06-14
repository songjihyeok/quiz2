import { useState } from 'react';

export default function useProduct() {
	const [selectedIndex, setSelectedIndex] = useState<number>(1);

	const onChangeCapacity = (value: unknown) => {
		setSelectedIndex(Number(value));
	};

	return { selectedIndex, onChangeCapacity };
}
