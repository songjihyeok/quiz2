import React from 'react';

// refs = https://reactrouter.com/docs/en/v6/getting-started/concepts#index-routes
const defaultRoutes = [
	{
		path: '/',
		element: React.createElement(React.lazy(() => import('@src/layouts/FullLayout'))),
		children: [
			{
				index: true,
				element: React.createElement(React.lazy(() => import('@root/src/pages/Home'))),
			},
			// 인사이트
			{
				path: 'insight',
				element: React.createElement(React.lazy(() => import('@src/pages/Insight'))),
			},
			// 뉴스레터
			{
				path: 'news-letter',
				element: React.createElement(React.lazy(() => import('@src/pages/NewsLetter'))),
			},
			// 시장동향
			{
				path: 'market',
				element: React.createElement(React.lazy(() => import('@src/pages/Market'))),
			},
			// REC
			{
				path: 'rec',
				element: React.createElement(React.lazy(() => import('@src/pages/REC'))),
			},
			// 경쟁입찰
			{
				path: 'contract',
				element: React.createElement(React.lazy(() => import('@root/src/pages/Contract'))),
			},
		],
	},
	{
		path: '/',
		element: React.createElement(React.lazy(() => import('@src/layouts/SubLayout'))),
		children: [
			// 회사소개
			{
				path: 'company',
				element: React.createElement(React.lazy(() => import('@root/src/pages/Company'))),
			},
			// 인재 채용
			// {
			// 	path: 'recruit',
			// 	element: React.createElement(React.lazy(() => import('@src/pages/recruit/Container'))),
			// },
			// 사업 부지 검토
			{
				path: 'fs',
				element: React.createElement(React.lazy(() => import('@root/src/pages/FS'))),
			},
			// 금융 자문
			{
				path: 'finance',
				element: React.createElement(React.lazy(() => import('@root/src/pages/Finance'))),
			},
			// 공장 지붕 태양광
			{
				path: 'rooftop',
				element: React.createElement(React.lazy(() => import('@src/pages/RoofTop'))),
			},
			// 발전소 분양
			{
				path: 'owners',
				element: React.createElement(React.lazy(() => import('@src/pages/Owners'))),
			},
			// 주택용 태양광
			{
				path: 'house',
				element: React.createElement(React.lazy(() => import('@src/pages/House'))),
			},
			// 아파트 태양광
			{
				path: 'apartment',
				element: React.createElement(React.lazy(() => import('@root/src/pages/Apartment'))),
			},
			// 발전왕(기존 SAEM)
			{
				path: 'king',
				element: React.createElement(React.lazy(() => import('@src/pages/King'))),
			},
			// 관리왕 (O&M)
			{
				path: 'onm',
				element: React.createElement(React.lazy(() => import('@root/src/pages/ONM'))),
			},
			// 발전소 매각
			{
				path: 'sell',
				element: React.createElement(React.lazy(() => import('@src/pages/Sell'))),
			},
			// 태양광종합공제보험
			{
				path: 'insurance',
				element: React.createElement(React.lazy(() => import('@src/pages/Insurance'))),
			},
			// 충전왕
			// {
			// 	path: 'evking',
			// 	element: React.createElement(React.lazy(() => import('@src/pages/evking'))),
			// },
			// 전력중개사업
			{
				path: 'exchange',
				element: React.createElement(React.lazy(() => import('@root/src/pages/Exchange'))),
			},
			// 솔라브리지
			// {
			// 	path: 'bridge',
			// 	element: React.createElement(React.lazy(() => import('@src/pages/bridge'))),
			// },

			// 기업 금융
			{
				path: 'bizfinance',
				element: React.createElement(React.lazy(() => import('@root/src/pages/Bizfinance'))),
			},
			// 시공비 100% 여신
			{
				path: 'loan',
				element: React.createElement(React.lazy(() => import('@src/pages/Loan'))),
			},
			// 기자재 특가·여신
			{
				path: 'product',
				element: React.createElement(React.lazy(() => import('@src/pages/Product'))),
			},
			// 프로젝트 매칭
			{
				path: 'matching',
				element: React.createElement(React.lazy(() => import('@src/pages/Matching'))),
			},
			// 비즈쌤
			{
				path: 'bizsaem',
				element: React.createElement(React.lazy(() => import('@root/src/pages/Bizsaem'))),
			},
			// RE100
			{
				path: 're100',
				element: React.createElement(React.lazy(() => import('@src/pages/RE100'))),
			},
			// 수요자원
			{
				path: 'dr',
				element: React.createElement(React.lazy(() => import('@src/pages/DR'))),
			},

			// utils
			// 공지사항
			{
				path: 'notice',
				element: React.createElement(React.lazy(() => import('@src/pages/Notice'))),
			},
			// 약관
			{
				path: 'terms',
				element: React.createElement(React.lazy(() => import('@src/pages/Terms'))),
			},

			// antd design sample
			{
				path: 'sample',
				element: React.createElement(React.lazy(() => import('@src/pages/Sample'))),
			},
			// design pattern sample
			{
				path: 'constate',
				element: React.createElement(React.lazy(() => import('@src/pages/Constate'))),
			},
			// not found
			{
				path: '*',
				element: React.createElement(React.lazy(() => import('@src/pages/NotFound'))),
			},
		],
	},
];

export default defaultRoutes;
