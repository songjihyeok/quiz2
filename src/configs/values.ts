import { NavigationProps } from './types';

const navigations: NavigationProps[] = [
	{
		key: 1,
		title: '회사소개',
		children: [
			{
				key: 'company',
				title: '솔라커넥트',
			},
			{
				key: 'recruit',
				title: '인재 채용 ↗',
				linkTo: 'https://recruit.solarconnect.kr',
			},
		],
	},
	{
		key: 2,
		title: '시작하기',
		children: [
			{
				key: 'fs',
				title: '사업 부지 검토',
			},
			{
				key: 'finance',
				title: '금융 자문',
			},
			{
				key: 'rooftop',
				title: '공장 지붕 태양광',
			},
			{
				key: 'owners',
				title: '발전소 분양',
			},
			{
				key: 'house',
				title: '주택용 태양광',
			},
			{
				key: 'apartment',
				title: '아파트 태양광',
			},
		],
	},
	{
		key: 3,
		title: '관리하기',
		children: [
			{
				key: 'king',
				title: '발전왕(기존 SAEM)',
			},
			{
				key: 'onm',
				title: '관리왕 (O&M)',
			},
			{
				key: 'sell',
				title: '발전소 매각',
			},
			{
				key: 'insurance',
				title: '태양광종합공제보험',
			},
			{
				key: 'evking',
				title: '충전왕 ↗',
				linkTo: 'https://ev.solarconnect.kr',
			},
		],
	},
	{
		key: 4,
		title: '수익높이기',
		children: [
			{
				key: 'exchange',
				title: '전력중개사업',
			},
			{
				key: 'bridge',
				title: '솔라브리지 ↗',
				linkTo: 'https://www.solarbridge.kr/?utm_source=solarconnect&utm_medium=gnb&utm_campaign=20210318',
			},
		],
	},
	{
		key: 5,
		title: '인사이트',
		children: [
			{
				key: 'insight',
				title: '인사이트',
			},
			{
				key: 'news-letter',
				title: '뉴스레터',
			},
			{
				key: 'market',
				title: '시장동향',
			},
			{
				key: 'rec',
				title: 'REC',
			},
			{
				key: 'contract',
				title: '경쟁입찰',
			},
		],
	},
	{
		key: 6,
		title: '기업고객',
		children: [
			{
				key: 'bizfinance',
				title: '기업 금융',
			},
			{
				key: 'loan',
				title: '시공비 100% 여신',
			},
			{
				key: 'product',
				title: '기자재 특가·여신',
			},
			{
				key: 'matching',
				title: '프로젝트 매칭',
			},
			{
				key: 'bizsaem',
				title: '비즈쌤',
			},
			{
				key: 're100',
				title: 'RE100',
			},
			{
				key: 'dr',
				title: '수요자원',
			},
		],
	},
];

const company = {
	name: '엔라이튼',
	nameEn: 'ENlighten',
	address: '서울특별시 서초구 서초대로 396, 6층',
	ceo: '이영호',
	// 사업자등록번호
	registrationNumber: '884-88-00541',
	// 통신판매업신고번호
	businessReportNumber: '2021-서울서초-2916호',
	// 고객센터 전화번호
	cs: {
		contract: '02-6931-0901',
		operatingTime: '평일 10:00 ~ 18:00 (주말/공휴일 제외)',
	},
};

export { navigations, company };
