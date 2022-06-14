import { useState, useCallback, useRef, useEffect, useMemo } from 'react';
import constate from 'constate';
import { service, values as commonValues } from '@src/configs';
import { NavigationProps } from '@src/configs/types';

import { values } from './configs';
import { MenuProps } from './configs/types';

function useLayoutWidth() {
	const [layoutWidth, setLayoutWidth] = useState<number>(352);
	const logoRef = useRef(null);

	useEffect(() => {
		const init = () => {
			if (logoRef.current) {
				setLayoutWidth(service.getValue(logoRef, 'current.offsetWidth', 352));
			}
		};
		init();
		window.addEventListener('resize', init);
		return () => window.removeEventListener('resize', init);
	}, [logoRef]);

	const setWidth = useCallback((width) => {
		setLayoutWidth(width);
	}, []);

	const menus: MenuProps[] = useMemo(() => {
		return commonValues.navigations.map((navigation: NavigationProps) => {
			// gnb depth 1메뉴는 banner를 추가한다.
			const matchedBanner = values.banners.find(({ key }) => key === navigation.key);
			return {
				...navigation,
				...(matchedBanner
					? {
							banner: {
								...matchedBanner,
							},
					  }
					: {}),
				children: navigation.children.map((child) => {
					// gnb depth 2메뉴는 attribute를 추가한다.
					const matchedAttribute = values.attributes.find(({ key }) => key === child.key);
					return {
						...child,
						...(matchedAttribute ? { attribute: { ...matchedAttribute } } : {}),
					};
				}),
			};
		});
	}, []);

	return { layoutWidth, logoRef, setWidth, menus };
}

const [Provider, useWidth, useLogoRef, useSetWidth, useMenu] = constate(
	useLayoutWidth,
	(value) => value.layoutWidth,
	(value) => value.logoRef,
	(value) => value.setWidth,
	(value) => value.menus
);

export { Provider, useWidth, useLogoRef, useSetWidth, useMenu };
