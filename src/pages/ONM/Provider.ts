import { useCallback, useState } from 'react';
import constate from 'constate';

type isVisibleTooltipProps = boolean;
type capacityProps = number;

function useOnm() {
	const [isVisibleTooltip, setIsVisibleTooltip] = useState<isVisibleTooltipProps>(false);
	const [capacity, setCapacity] = useState<capacityProps>(1);

	const onChangeVisible = useCallback((visible: boolean) => {
		setIsVisibleTooltip(visible);
	}, []);

	const onChangeCapacity = (value: unknown) => {
		setCapacity(Number(value));
	};

	return {
		isVisibleTooltip,
		capacity,
		onChangeVisible,
		onChangeCapacity,
	};
}

const [Provider, useIsVisibleTooltip, useChangeVisible, usecapacity, useChangeCapacity] = constate(
	useOnm,
	(value) => value.isVisibleTooltip,
	(value) => value.onChangeVisible,
	(value) => value.capacity,
	(value) => value.onChangeCapacity
);

export { Provider, useIsVisibleTooltip, useChangeVisible, usecapacity, useChangeCapacity };
