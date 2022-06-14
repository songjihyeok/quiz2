import { useState, useCallback, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useMenu } from '../Provider';

import { MenuProps, MenuChildProps } from '../configs/types';

interface useHamburgerProps {
	visible: boolean;
	setVisible: React.Dispatch<React.SetStateAction<boolean>>;
	menus: MenuProps[];
	childMenus: MenuChildProps[];
	childVisible: boolean;
	selected?: string;
	onSelect: (key: string | undefined) => void;
	currentMenu?: MenuProps;
}

function useHamburger(): useHamburgerProps {
	const location = useLocation();
	const { pathname } = location;

	const [visible, setVisible] = useState<boolean>(false);
	const [selected, setSelected] = useState<string>();

	const [childVisible, setChildVisible] = useState<boolean>(false);

	const menus = useMenu();

	useEffect(() => {
		const matchedParent = menus.find(({ children }) => children.map(({ key }) => `/${key}`).includes(pathname));
		if (matchedParent) {
			setSelected(() => matchedParent?.key.toString());
		}
		return () => setSelected(undefined);
	}, [pathname]);

	const currentMenu = useMemo(() => {
		return menus.find(({ key }) => key.toString() === selected);
	}, [selected]);

	const childMenus = useMemo(() => {
		return currentMenu?.children || [];
	}, [currentMenu]);

	const onSelect = useCallback((key: string | undefined) => {
		setChildVisible(!!key);
		setSelected((state) => {
			return key || state;
		});
	}, []);

	return { visible, setVisible, menus, childMenus, childVisible, selected, onSelect, currentMenu };
}

export { useHamburger };
