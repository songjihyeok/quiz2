// import dependency modules : package.json에 명시된 외부모듈을 선언하세요.
import { Row, Col, Typography, Image } from 'antd';
import styled from 'styled-components';

// import global modules : 서비스 전역에서 사용중인 모듈을 선언하세요.

// import local modules : 지역(route)에서 사용중인 모듈을 선언하세요.

export default function Market() {
	return (
		<Row gutter={[16, 16]} align="middle">
			<MarketCol xs={24} lg={11}>
				<StyledTitle level={4}>과거 전력 시장</StyledTitle>
				<StyledImage src={require('@src/assets/images/pages/dr/section2/img_left.png').default} preview={false} />
			</MarketCol>
			<ArrowCol xs={24} lg={2}></ArrowCol>
			<MarketCol xs={24} lg={11}>
				<ColorTitle level={4}>발전, 수요 통합 전력시장</ColorTitle>
				<StyledImage src={require('@src/assets/images/pages/dr/section2/img_right.png').default} preview={false} />
			</MarketCol>
		</Row>
	);
}

// 함수로 작성한 styled component를 선언하세요.

const MarketCol = styled(Col)(({ theme }) => {
	return {
		backgroundColor: theme.white,
		padding: theme.paddingXl,
	};
});

const ArrowCol = styled(Col)(({ theme }) => {
	return {
		backgroundImage: `url(${require('@src/assets/images/pages/dr/section2/img_arrow.png').default})`,
		height: 40,
		backgroundRepeat: 'no-repeat',
		backgroundSize: '34px 35px',
		backgroundPosition: 'center',
		[`@media ${theme.mobileMedia}`]: {
			transform: 'rotate(90deg)',
		},
	};
});

const StyledTitle = styled(Typography.Title)(() => {
	return {
		['&&']: {
			marginBottom: 32,
		},
	};
});

const ColorTitle = styled(StyledTitle)(({ theme }) => {
	return {
		['&&']: {
			color: theme.primaryColor,
		},
	};
});

const StyledImage = styled(Image)(({ theme }) => {
	return {
		padding: '0 40px',
		[`@media ${theme.mobileMedia}`]: {
			maxWidth: 400,
			margin: '0 auto',
		},
	};
});
