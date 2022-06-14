import ImgService01 from '@src/assets/images/pages/onm/img_service_01.png';
import ImgService02 from '@src/assets/images/pages/onm/img_service_02.png';
import ImgService03 from '@src/assets/images/pages/onm/img_service_03.png';
import ImgService04 from '@src/assets/images/pages/onm/img_service_04.png';
import ImgMowing01 from '@src/assets/images/pages/onm/img_mowing_01.png';
import ImgMowing02 from '@src/assets/images/pages/onm/img_mowing_02.png';
import ImgMowing03 from '@src/assets/images/pages/onm/img_mowing_03.png';
import VideoDiagnose01 from '@src/assets/images/pages/onm/video_diagnose_01.mp4';
import ImgDiagnose02 from '@src/assets/images/pages/onm/img_diagnose_02.png';
import ImgDiagnose03 from '@src/assets/images/pages/onm/img_diagnose_03.png';
import ImgDiagnose04 from '@src/assets/images/pages/onm/img_diagnose_04.png';
import ImgSafteyManager01 from '@src/assets/images/pages/onm/img_safetymanager_01.png';
import ImgSafteyManager02 from '@src/assets/images/pages/onm/img_safetymanager_02.png';
import ImgSafteyManager03 from '@src/assets/images/pages/onm/img_safetymanager_03.png';
import ImgReport01 from '@src/assets/images/pages/onm/img_report_01.png';
import ImgReport02 from '@src/assets/images/pages/onm/img_report_02.png';
import ImgReport03 from '@src/assets/images/pages/onm/img_report_03.png';
import ImgReport04 from '@src/assets/images/pages/onm/img_report_04.png';
import { DiagnoseServiceProps, IntroProps, MowingServiceProps, ProductProps, ProductSelectProps, ReportServiceProps, SafetyManagerServiceProps } from './types';

const introductionList: IntroProps[] = [
	{
		title: `알아서 다 해주는 
		전문 예초 관리`,
		src: ImgService01,
		scrollPosition: 'service01',
	},
	{
		title: `국내 최고 수준
		최첨단 정밀진단`,
		src: ImgService02,
		scrollPosition: 'service02',
	},
	{
		title: `세심하고 철저한
		안전관리`,
		src: ImgService03,
		scrollPosition: 'service03',
	},
	{
		title: `365일 확인하는
		발전 보고서`,
		src: ImgService04,
		scrollPosition: 'service04',
	},
];

const mowingList: MowingServiceProps[] = [
	{
		title: `신경 쓰지 않아도
		필요한 시기에 알아서`,
		description: '장마 전, 후 시기에 알아서 예초 관리를 해드립니다.',
		src: ImgMowing01,
	},
	{
		title: `믿고 맡길 수 있는
		예초 전/후 사진 보고`,
		description: '직접 방문하지 않아도 예초 현황을 확인 가능합니다.',
		src: ImgMowing02,
	},
	{
		title: `파손 및 상해 걱정 없는
		숙련된 전문 인력`,
		description: '발전소 예초 경력 10년 이상의 전문가만을 파견합니다.',
		src: ImgMowing03,
	},
];

const diagnoseList: DiagnoseServiceProps[] = [
	{
		title: `진단 발전소 3곳 중 1곳에서
	치명적 결함 발생`,
		caption: '*2021.06 ~2021.08 226개소 정밀진단 결과 ',
		src: VideoDiagnose01,
		isVideo: true,
	},
	{
		title: `2년 이상된 발전소라면
		정기검진은 필수!`,
		description: `모듈 파손, 접속 불량, 케이블 발열 등의
		이유로 발전량 저하가 있을 수 있습니다.`,
		src: ImgDiagnose02,
	},
	{
		title: `최첨단 장비를 활용한
		O&M 전문가의 정밀진단`,
		description: `최첨단 장비를 활용한
		O&M 전문가의 정밀진단`,
		src: ImgDiagnose03,
	},
	{
		title: `발전 성능, 사고 위험성 진단에
		기자재 품질/불량 검출까지`,
		description: `안전관리 및 단순 육안검사로 해결할 수 없는 
		숨은 문제점까지 찾아줍니다.`,
		src: ImgDiagnose04,
	},
];

const safetyManagerList: SafetyManagerServiceProps[] = [
	{
		title: `특이상황 발생 시
		24시간 이내 긴급 대응`,
		description: '24시간 이내 출동하여 현장 점검 및 유지보수를 진행합니다.',
		src: ImgSafteyManager01,
	},
	{
		title: `고객 불만족 시
		안전관리자 즉시 교체`,
		description: '고객이 만족하지 못하면 언제든 교체하실 수 있습니다.',
		src: ImgSafteyManager02,
	},
	{
		title: `세심한 발전소 케어와
		철저한 커뮤니케이션`,
		description: '철저한 보고 체계를 통해 주기적으로 고객과 소통합니다.',
		src: ImgSafteyManager03,
	},
];

const eventList: string[] = ['기기값 + 설치비(교체비) 완전 무료!', '발전소 이상 감지시 문자 혹은 카카오톡 알림 발송', '3년 무상 AS 및 장비 교체 서비스'];

const reportList: ReportServiceProps[] = [
	{
		title: '발전왕 모니터링(365일)',
		description: '24시간 모니터링, 이상 발생 시 알림',
		caution: '자사 RTU 이용고객에 한함',
		src: ImgReport01,
	},
	{
		title: '주간 보고서(연 52회)',
		description: '인공지능 기술의 발전량 분석 시스템',
		caution: '* 일부 발전소는 서비스 이용이 불가할 수 있음',
		src: ImgReport02,
	},
	{
		title: '정밀진단 보고서(연 1회)',
		description: '발전소 수익을 지키는 최적의 솔루션',
		caution: '* 정밀진단 상품 신청자에 한함',
		src: ImgReport03,
	},
	{
		title: '안전관리 보고서(연 12회)',
		description: '직무고시를 준수한 꼼꼼하고 엄격한 관리',
		caution: '* 안전관리 상품 신청자에 한함',
		src: ImgReport04,
	},
];

const productSelectList: ProductSelectProps[] = [
	{ label: '30kW ~ 100kW', value: 1 },
	{ label: '101kW ~ 200kW', value: 2 },
	{ label: '201kW ~ 300kW', value: 3 },
];

const productList: ProductProps[] = [
	{
		title: '예초패키지',
		priceList: [
			{
				price: '월 33,000원',
			},
			{
				price: '월 59,000원',
			},
			{
				price: '월 95,000원',
			},
		],
		serviceList: [
			{
				name: '발전소 관리(365일)',
				isoffer: true,
			},
			{
				name: '예초(연 2회)',
				isoffer: true,
			},
			{
				name: '현장 정밀 진단(연 1회)',
				isoffer: false,
			},
			{
				name: '안전관리자',
				isoffer: false,
			},
		],
	},
	{
		title: '정밀진단 패키지',
		priceList: [
			{
				price: '월 39,000원',
			},
			{
				price: '월 59,000원',
			},
			{
				price: '월 79,000원',
			},
		],
		serviceList: [
			{
				name: '발전소 관리(365일)',
				isoffer: true,
			},
			{
				name: '예초(연 2회)',
				isoffer: false,
			},
			{
				name: '현장 정밀 진단(연 1회)',
				isoffer: true,
			},
			{
				name: '안전관리자',
				isoffer: false,
			},
		],
	},
	{
		title: '예초+정밀진단 패키지',
		isRecommended: true,
		isdiscount: true,
		priceList: [
			{
				initialPrice: '월 72,000원',
				percentage: '32% 할인',
				price: '월 49,000원',
			},
			{
				initialPrice: '월 118,000원',
				percentage: '33% 할인',
				price: '월 79,000원',
			},
			{
				initialPrice: '월 174,000원',
				percentage: '37% 할인',
				price: '월 109,000원',
			},
		],
		serviceList: [
			{
				name: '발전소 관리(365일)',
				isoffer: true,
			},
			{
				name: '예초(연 2회)',
				isoffer: true,
			},
			{
				name: '현장 정밀 진단(연 1회)',
				isoffer: true,
			},
			{
				name: '안전관리자',
				isoffer: false,
			},
		],
	},
	{
		title: '안전관리 종합 패키지',
		isdiscount: true,
		priceList: [
			{
				initialPrice: '월 179,000원',
				percentage: '34% 할인',
				price: '월 119,000원',
			},
			{
				initialPrice: '월 239,000원',
				percentage: '33% 할인',
				price: '월 159,000원',
			},
			{
				initialPrice: '월 299,000원',
				percentage: '33% 할인',
				price: '월 199,000원',
			},
		],
		serviceList: [
			{
				name: '발전소 관리(365일)',
				isoffer: true,
			},
			{
				name: '예초(연 2회)',
				isoffer: true,
			},
			{
				name: '현장 정밀 진단(연 1회)',
				isoffer: true,
			},
			{
				name: '안전관리자',
				isoffer: true,
			},
		],
	},
];

const productPriceList = [
	{
		originPrice: '월 33,000원',
	},
	{
		originPrice: '월 39,000원',
	},
	{
		originPrice: '월 72,000원',
		isdiscount: true,
		discountPrice: '월 49,000원',
		percentage: '34% 할인',
	},
	{
		originPrice: '월 179,000원',
		isdiscount: true,
		discountPrice: '월 49,000원',
	},
];

export { introductionList, mowingList, diagnoseList, safetyManagerList, eventList, reportList, productSelectList, productList };
