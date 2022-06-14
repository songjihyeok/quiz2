import { useCallback, useState } from 'react';
import constate from 'constate';

type isVisibleTooltipProps = boolean;
type capacityProps = number;

function useDiagnose() {
	const [isVisibleTooltip, setIsVisibleTooltip] = useState<isVisibleTooltipProps>(false);

	const onChangeVisible = useCallback((visible: boolean) => {
		setIsVisibleTooltip(visible);
	}, []);

	return {
		isVisibleTooltip,
		onChangeVisible,
	};
}

const [Provider, useIsVisibleTooltip, useChangeVisible] = constate(
	useDiagnose,
	(value) => value.isVisibleTooltip,
	(value) => value.onChangeVisible
);

export { Provider, useIsVisibleTooltip, useChangeVisible };
