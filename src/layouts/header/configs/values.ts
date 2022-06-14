import { BannerProps, AttributesProps } from './types';

const banners: BannerProps[] = [
	{
		key: 1,
		src: require('@src/assets/images/banners/gnb/banner_01.png'),
		linkTo: 'https://recruit.solarconnect.kr',
	},
	{
		key: 2,
		src: require('@src/assets/images/banners/gnb/banner_02.png'),
		linkTo: '/house',
	},
	{
		key: 3,
		src: require('@src/assets/images/banners/gnb/banner_03.png'),
		linkTo: 'https://king.solarconnect.kr/sign-in?type=demoinit&redirectUrl=/inbox/event/2486?utm_source=solarconnect&utm_medium=gnb_banner&utm_campaign=210131_발전소등록',
	},
	{
		key: 4,
		src: require('@src/assets/images/banners/gnb/banner_04.png'),
		linkTo: '/exchange',
	},
	{
		key: 5,
		src: require('@src/assets/images/banners/gnb/banner_05.png'),
		linkTo: '/news-letter',
	},
	{
		key: 6,
		src: require('@src/assets/images/banners/gnb/banner_06.png'),
		linkTo: '/bizsaem',
	},
];

const attributes: AttributesProps[] = [
	{
		key: 'company',
		description: '국내 1위 에너지 IT 기업 알아보기',
	},
	{
		key: 'recruit',
		description: '채용 중인 분야 확인하기',
	},
	{
		key: 'fs',
		description: '사업 가능 여부 무료로 확인하기',
	},
	{
		key: 'finance',
		description: '부족한 건설 자금 해결하기',
	},
	{
		key: 'rooftop',
		description: '유휴 지붕으로 최대 6.8억 벌기',
	},
	{
		key: 'owners',
		description: '엄선된 발전사업 추천받기',
	},
	{
		key: 'house',
		description: '우리집 전기요금 80% 절감하기',
	},
	{
		key: 'apartment',
		description: '우리집 관리비 절감하기',
	},
	{
		key: 'king',
		description: '스마트폰으로 간편하게 발전소 관리하기',
	},
	{
		key: 'onm',
		description: '예초, 진단, 안전관리를 한번에!',
	},
	{
		key: 'sell',
		description: '합리적인 가격에 발전소 매각하기',
	},
	{
		key: 'insurance',
		description: '화재부터 자연재해까지 폭넓게 보장받기',
	},
	{
		key: 'evking',
		description: '전기차 충전요금 최저가 확인하기',
	},
	{
		key: 'exchange',
		description: '국내 유일 고정 수익 챙기기',
	},
	{
		key: 'bridge',
		description: '평균 수익률 11% 발전사업 투자하기',
	},
	{
		key: 'insight',
		description: '태양광 핵심 트렌드 모아 보기',
	},
	{
		key: 'news-letter',
		description: '하루도 놓치면 안 될 태양광 소식 받기',
	},
	{
		key: 'market',
		description: 'SMP+REC 가격 동향 확인하기',
	},
	{
		key: 'rec',
		description: 'REC 현물 가격 동향 확인하기',
	},
	{
		key: 'contract',
		description: '고정 가격 계약 정보 확인하기',
	},
	{
		key: 'bizfinance',
		description: '업계 1위 태양광 금융 알아보기',
	},
	{
		key: 'loan',
		description: '최대 9억원까지 시공비 선지급 받기',
	},
	{
		key: 'product',
		description: '업계 최저가로 기자재 구매하기',
	},
	{
		key: 'matching',
		description: '신규 시공 사업 수주 받기',
	},
	{
		key: 'bizsaem',
		description: '모든 발전소 한번에 모니터링 하기',
	},
	{
		key: 're100',
		description: '지속가능한 발전 실현하기',
	},
	{
		key: 'dr',
		description: '아낀 전력으로 수익 창출하기',
	},
];

export { banners, attributes };
