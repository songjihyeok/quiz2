import { ButtonProps } from 'antd/lib/button';
import React from 'react';

// todo remove optional
export interface VisualValueProps {
	key: string;
	title?: string;
	description: string;
	button?: ButtonProps;
	style?: React.CSSProperties;
	// 구 template는 title과 description 치환,
	inverse?: boolean;
}

const visuals: VisualValueProps[] = [
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
		title: '사업 부지 검토',
		description: `지번만 입력하면 7일 내 회신!
		사업 가능 시 시공사 매칭해 드립니다.`,
		button: {
			type: 'primary',
			children: '무료 검토 신청하기',
			style: { backgroundColor: '#00bd91', borderColor: '#00bd91' },
		},
		inverse: true,
	},
	{
		key: 'finance',
		title: '금융 자문',
		description: `사업의 핵심은 결국, 금융!
		사업의 특성에 맞게 금융을 해결합니다.`,
		button: {
			type: 'primary',
			children: '금융 자문 시작하기',
		},
		inverse: true,
	},
	{
		key: 'rooftop',
		title: '공장 지붕 태양광',
		description: `비어있는 공장 지붕으로 20년간 추가 수익 확보.
		초기 투자비 없이 가장 빠르게, 수익률은 가장 높게!`,
		button: {
			type: 'primary',
			children: '문의하기',
		},
		inverse: true,
	},
	{
		key: 'owners',
		title: '발전소 분양',
		description: '처음부터 끝까지 솔라커넥트가 함께 합니다.',
		button: {
			type: 'primary',
			children: 'Owners Program 신청하기',
			style: { backgroundColor: '#fdb100', borderColor: '#fdb100' },
		},
		inverse: true,
	},
	{
		key: 'house',
		title: '주택용 태양광',
		description: '우리집 전기요금 최대 80% 절감해보세요.',
		button: {
			type: 'primary',
			children: '문의하기',
		},
		inverse: true,
	},
	{
		key: 'apartment',
		title: '아파트 태양광',
		description: `아파트에 태양광을 설치하고, 
		친환경 아파트 사업에 참여하세요.`,
		button: {
			type: 'primary',
			children: '문의하기',
		},
		inverse: true,
	},
	{
		key: 'king',
		title: '발전왕',
		description: '지구에서 가장 쉬운 발전소 관리',
		button: {
			type: 'primary',
			href: 'https://king.solarconnect.kr/sign-in?utm_source=solarconnect&utm_medium=king_top&utm_campaign=211210_SC',
			children: '관리왕 상품 확인하기',
			target: '_blank',
		},
	},
	{
		key: 'onm',
		description: '예초, 진단, 안전관리를 한 번에!',
		title: '관리왕 (O&M)',
		button: {
			type: 'primary',
			children: '관리왕 상품 확인하기',
			size: 'middle',
			onClick: () => {
				//
			},
		},
	},
	{
		key: 'sell',
		title: '발전사업 매각',
		description: `신속하게 결정하고, 명확하게 자금을 집행합니다.`,
		button: {
			type: 'primary',
			children: '매각 문의하기',
		},
		inverse: true,
	},
	{
		key: 'insurance',
		title: '보험 최저가 가입 35% OFF',
		description: '솔라커넥트라서 가능한',
		button: {
			type: 'primary',
			href: 'https://king.solarconnect.kr/inbox/notice/197',
			children: '내 발전소 보험 신청하기',
			target: '_blank',
		},
	},
	{
		key: 'evking',
		description: '전기차 충전요금 최저가 확인하기',
	},
	{
		key: 'exchange',
		title: '전력중개사업',
		description: '손 쉽게 확보하는 추가 수익',
		button: {
			type: 'primary',
			href: 'https://forms.gle/SaH7iLUXj9UVJttK9',
			children: '내 수익 찾아내기',
			target: '_blank',
		},
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
		title: '기업 금융',
		description: `사업별 특성을 고려한
		맞춤 금융 솔루션을 제공합니다.`,
		button: {
			type: 'primary',
			children: '문의하기',
		},
		inverse: true,
	},
	{
		key: 'loan',
		title: '시공비 100% 여신',
		description: `담보, 보증 부담을 최소화한 상품으로
		건설 기간 현금 확보 부담을 없애드립니다.`,
		button: {
			type: 'primary',
			children: '문의하기',
		},
		inverse: true,
	},
	{
		key: 'product',
		title: '기자재 특가·여신',
		description: `경쟁력 있는 가격으로 태양광 모듈과 인버터를 확보하고,
		자금 조달 고민까지 한번에 해결합니다.`,
		// todo scroll event
		button: {
			type: 'primary',
			children: '제조사 선택하기',
		},
		inverse: true,
	},
	{
		key: 'matching',
		title: '프로젝트 매칭',
		description: `전문 시공 파트너사에게
		사업을 연결합니다.`,
		button: {
			type: 'primary',
			children: '파트너 되고 사업 연결받기',
		},
		inverse: true,
	},
	{
		key: 'bizsaem',
		title: '비즈쌤(bizSAEM)',
		description: '시공사, 전기안전관리자를 위한',
		button: {
			type: 'primary',
			href: 'https://forms.gle/yqyKdgV7JGTikhAo8',
			children: '체험 해보기',
			target: '_blank',
		},
	},
	{
		key: 're100',
		title: 'RE100',
		description: `국내 유일 영국 CDP 인증 서비스 공급 업체인
		솔라커넥트가 지속 가능한 발전을 실현해드립니다.`,
		button: {
			type: 'primary',
			children: '문의하기',
		},
		inverse: true,
	},
	{
		key: 'dr',
		title: '수요자원',
		description: `에너지와 ICT가 결합된 새로운 전력시장, 
		아낀 전기를 판매하여 수익을 창출하세요.`,
		button: {
			type: 'primary',
			children: '문의하기',
		},
		inverse: true,
	},
];

export { visuals };
