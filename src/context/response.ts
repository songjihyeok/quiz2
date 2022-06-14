import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import constate from 'constate';

function useResponseLayout() {
	const theme = useContext(ThemeContext);

	const [isMobile, setIsMobile] = useState<boolean>(false);

	useEffect(() => {
		const init = () => {
			const mobileSize = theme.mobile.replace('px', ' ');
			if (Number.parseInt(mobileSize) > window.innerWidth) {
				setIsMobile(true);
			} else {
				setIsMobile(false);
			}
		};
		init();
		window.addEventListener('resize', init);
		return () => window.removeEventListener('resize', init);
	}, []);

	return { isMobile };
}

const [Provider, useResponse] = constate(useResponseLayout, (value) => value.isMobile);

export { Provider, useResponse };
