import React from 'react';

interface ArticleProps {
	images: {
		web: string;
		mobile?: string;
	};
	styles?: {
		web?: React.CSSProperties;
		mobile?: React.CSSProperties;
	};
}
export interface ContentItem {
	key: number;
	title?: string;
	description?: string;
	component: React.ElementType;
	articles?: ArticleProps[];
}

const contents: ContentItem[] = [
	{
		key: 1,
		title: '수요자원(Demand Response) 거래시장',
		description: '전기사용자가 전력시장 가격이 높을 때 또는 전력계통 위기 시\n 아낀 전기나 보유한 전기를 전력시장에 판매하고 수익을 창출하는 제도입니다.',
		component: React.lazy(() => import('@src/pages/DR/Image')),
		articles: [
			{
				images: {
					web: require('@src/assets/images/pages/dr/section1/img_web.png').default,
					mobile: require('@src/assets/images/pages/dr/section1/img_mobile.png').default,
				},
				styles: {
					web: {
						marginTop: 64,
						width: 740,
						height: 211,
					},
					mobile: {
						marginTop: 32,
						width: 224,
						height: 551,
					},
				},
			},
		],
	},
	{
		key: 2,
		title: '발전, 수요 통합 전력시장',
		description:
			'전력거래소는 발전사의 전력공급가격과 수요자원의 아낀 전기에 대한 입찰 가격을 비교하여\n 낮은 가격쪽으로 공급되도록 시장을 운영합니다. 전력수요가 높은 시기에 가동되는 고비용 발전기를\n 저렴한 수요반응자원이 대체하여 전력공급 비용을 절감합니다.',
		component: React.lazy(() => import('@src/pages/DR/Market')),
	},
	{
		key: 3,
		title: '수요반응자원 거래시장 참여방법',
		component: React.lazy(() => import('@src/pages/DR/Join')),
	},
	{
		key: 4,
		title: '엔라이튼이 모든 것을 담당합니다.',
		component: React.lazy(() => import('@src/pages/DR/Manage')),
	},
	{
		key: 5,
		title: '빅데이터 수요예측 기반 DR 서비스',
		component: React.lazy(() => import('@src/pages/DR/Image')),
		articles: [
			{
				images: {
					web: require('@src/assets/images/pages/dr/section5/img_web.png').default,
					mobile: require('@src/assets/images/pages/dr/section5/img_mobile.png').default,
				},
				styles: {
					web: {
						marginTop: 40,
						width: 730,
						height: 191,
					},
					mobile: {
						marginTop: 32,
						width: 288,
						height: 357,
					},
				},
			},
		],
	},
	{
		key: 6,
		title: '예측 기반의 효율적인 자원운용',
		component: React.lazy(() => import('@src/pages/DR/Efficient')),
	},
	{
		key: 7,
		component: React.lazy(() => import('@src/pages/DR/Divider')),
	},
	{
		key: 8,
		title: 'DR + ESS',
		description: '예측된 전력 소비량을 참고하여 ESS를 유기적으로 제어함으로써\n 효과적으로 피크를 감소시키고, 추가적인 DR응동이 가능합니다.',
		component: React.lazy(() => import('@src/pages/DR/DRESS')),
	},
	{
		key: 9,
		title: '빅데이터 수요예측으로 에너지 수익을 키우세요.',
		component: React.lazy(() => import('@src/pages/DR/Claim')),
	},
];

export { contents };
