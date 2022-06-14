import { useState, useCallback } from 'react';
import constate from 'constate';

type capacityProps = number;

function useProduct() {
	const [capacity, setCapacity] = useState<capacityProps>(1);

	const onChangeCapacity = (value: unknown) => {
		setCapacity(Number(value));
	};

	return { capacity, onChangeCapacity };
}

const [Provider, useCapacity, useChangeCapacity] = constate(
	useProduct,
	(value) => value.capacity,
	(value) => value.onChangeCapacity
);

export { Provider, useCapacity, useChangeCapacity };
