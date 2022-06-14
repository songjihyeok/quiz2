// import dependency modules : package.json에 명시된 외부모듈을 선언하세요.
import { Row, Col, Image, Typography } from 'antd';
import styled from 'styled-components';

// import global modules : 서비스 전역에서 사용중인 모듈을 선언하세요.

// import local modules : 지역(route)에서 사용중인 모듈을 선언하세요.

export default function Divider() {
	return (
		<Row gutter={[16, 16]} align="middle">
			<Col xs={24} lg={10}>
				<Image src={require('@src/assets/images/pages/dr/section7/img_web.png').default} preview={false} />
			</Col>
			<Col xs={24} lg={12}>
				<StyledTypography>
					<StyledTitle level={3}>{`내일 사용량을 미리 알 수 있다면, 
팔 수 있는 전기가 생겨납니다.`}</StyledTitle>
					<StyledText>{`참가고객의 전력사용 패턴을 분석하여 추가로 아낄 수 있는 전력량을 예측합니다.
남는 전기로 경제성 DR에 참여해 더 큰 수익을 창출할 수 있습니다.`}</StyledText>
				</StyledTypography>
			</Col>
		</Row>
	);
}

// 함수로 작성한 styled component를 선언하세요.
const StyledTypography = styled(Typography)(({ theme }) => {
	return {
		textAlign: 'left',

		[`@media ${theme.mobileMedia}`]: {
			textAlign: 'center',
		},
	};
});

const StyledTitle = styled(Typography.Title)(({ theme }) => {
	return {
		['&&']: {
			marginBottom: 32,
			whiteSpace: 'break-spaces',
		},
	};
});

const StyledText = styled(Typography.Text)(({ theme }) => {
	return {
		['&&']: {
			whiteSpace: 'break-spaces',
		},
	};
});
