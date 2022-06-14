export interface IntroProps {
	title: string;
	src: string;
	scrollPosition: string;
}

export interface MowingServiceProps {
	title: string;
	description: string;
	src: string;
}

export interface DiagnoseServiceProps {
	title: string;
	description?: string;
	src: string;
	caption?: string;
	isVideo?: boolean;
}

export interface SafetyManagerServiceProps {
	title: string;
	description: string;
	src: string;
}

export interface ReportServiceProps {
	title: string;
	description: string;
	caution: string;
	src: string;
}

export interface ProductSelectProps {
	label: string;
	value: number;
}

export interface PriceListProps {
	initialPrice?: string;
	percentage?: string;
	price: string;
}

export interface ProductProps {
	title: string;
	isRecommended?: boolean;
	isdiscount?: boolean;
	serviceList: ProductServiceListProps[];
	priceList: PriceListProps[];
}

export interface ProductServiceListProps {
	name: string;
	isoffer: boolean;
}
