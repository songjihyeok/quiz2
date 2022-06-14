// import dependency modules : package.json에 명시된 외부모듈을 선언하세요.
import { Row, Col, Typography, Image } from 'antd';
import styled from 'styled-components';

// import global modules : 서비스 전역에서 사용중인 모듈을 선언하세요.

// import local modules : 지역(route)에서 사용중인 모듈을 선언하세요.

export default function Efficient() {
	return (
		<Row gutter={[16, 16]} align="middle">
			<Col xs={24} lg={11}>
				<StyledTitleWrapper>
					<StyledTitle level={4}>기존 부하관리 시스템</StyledTitle>
					<StyledText>{`소비 > 확인 > 조정`}</StyledText>
					<StyledText>5~10분 전 임박 알림</StyledText>
					<StyledText>긴급상황 발생 시 대처시간 부족</StyledText>
					<StyledText>제한적인 자원운용</StyledText>
				</StyledTitleWrapper>

				<StyledImage src={require('@src/assets/images/pages/dr/section6/img_left.png').default} preview={false} />
			</Col>
			<Col xs={24} lg={2}>
				<Typography.Title level={4}>VS</Typography.Title>
			</Col>
			<Col xs={24} lg={11}>
				<StyledTitleWrapper>
					<StyledTitle level={4}>발전, 수요 통합 전력시장</StyledTitle>
					<ColorText>{`예측 > 계획 > 소비`}</ColorText>
					<StyledText>5~10분 전 임박 알림</StyledText>
					<StyledText>긴급상황 발생 시 대처시간 부족</StyledText>
					<StyledText>제한적인 자원운용</StyledText>
				</StyledTitleWrapper>
				<StyledImage src={require('@src/assets/images/pages/dr/section6/img_right.png').default} preview={false} />
			</Col>
		</Row>
	);
}

// 함수로 작성한 styled component를 선언하세요.
const StyledTitleWrapper = styled(Typography)(() => {
	return {
		['&&']: {
			marginBottom: 32,
		},
	};
});

const StyledTitle = styled(Typography.Title)(() => {
	return {
		['&&']: {
			marginBottom: 8,
		},
	};
});

const StyledText = styled(Typography.Text)(() => {
	return {
		['&&']: {
			display: 'block',
		},
	};
});

const ColorText = styled(StyledText)(({ theme }) => {
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
