import { NavigationProps, NavigationChildProps } from '@src/configs/types';

export interface BannerProps {
	key: number; // global values의 navigations과 key를 맞춰줘야 합니다.
	src: string;
	linkTo: string;
}

export interface AttributesProps {
	key: string; // global values의 navigations.children의 path와 key를 맞춰줘야 합니다.
	description: string;
}

export interface MenuChildProps extends NavigationChildProps {
	attribute?: AttributesProps;
}
export interface MenuProps extends NavigationProps {
	banner?: BannerProps;
	children: MenuChildProps[];
}
