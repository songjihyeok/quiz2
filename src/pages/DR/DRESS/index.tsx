// import dependency modules : package.json에 명시된 외부모듈을 선언하세요.
import { Row, Col, Typography, Image } from 'antd';
import styled from 'styled-components';

// import global modules : 서비스 전역에서 사용중인 모듈을 선언하세요.

// import local modules : 지역(route)에서 사용중인 모듈을 선언하세요.

export default function DRESS() {
	return (
		<Row gutter={[0, 90]}>
			<Col span={24}>
				<StyledTitle level={4}>기존 PMS - 정적 스케쥴 운영</StyledTitle>
				<Row gutter={[16, 16]}>
					<Col xs={24} lg={14}>
						<StyledImage src={require('@src/assets/images/pages/dr/section8/img_1.png').default} preview={false} />
					</Col>
					<Col xs={24} lg={10}>
						<StyledImage src={require('@src/assets/images/pages/dr/section8/img_2.png').default} preview={false} />
					</Col>
				</Row>
			</Col>
			<Col span={24}>
				<StyledTitle level={4}>엔라이튼 PMS - 유기적 스케쥴 운영</StyledTitle>
				<Row gutter={[16, 16]}>
					<Col xs={24} lg={14}>
						<StyledImage src={require('@src/assets/images/pages/dr/section8/img_3.png').default} preview={false} />
					</Col>
					<Col xs={24} lg={10}>
						<StyledImage src={require('@src/assets/images/pages/dr/section8/img_4.png').default} preview={false} />
					</Col>
				</Row>
			</Col>
		</Row>
	);
}

// 함수로 작성한 styled component를 선언하세요.
const StyledTitle = styled(Typography.Title)(({ theme }) => {
	return {
		['&&']: {
			color: theme.primaryColor,
			marginBottom: 18,
		},
	};
});

const StyledImage = styled(Image)(({ theme }) => {
	return {
		[`@media ${theme.mobileMedia}`]: {
			margin: '0 auto',
			maxWidth: 400,
		},
	};
});
