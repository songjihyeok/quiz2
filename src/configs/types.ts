interface TitleProps {
	title: string;
}

export interface NavigationChildProps {
	key: string; // key 와 path
	title: TitleProps['title'];
	linkTo?: string;
}

export interface NavigationProps {
	key: number; // key 와 order
	title: TitleProps['title'];
	children: NavigationChildProps[];
}
