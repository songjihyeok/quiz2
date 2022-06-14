// import dependency modules : package.json에 명시된 외부모듈을 선언하세요.
import { Row, Col, Typography, Card } from 'antd';
import styled from 'styled-components';

// import global modules : 서비스 전역에서 사용중인 모듈을 선언하세요.

// import local modules : 지역(route)에서 사용중인 모듈을 선언하세요.

export default function Manage() {
	return (
		<Row>
			<ManageCol xs={24} lg={8}>
				<ManageCard>
					<Typography>
						<StyledTitle level={4}>투자비 Zero</StyledTitle>
						<StyledText>참여고객은 수요자원 등록에 비용 투자를 할 필요 없습니다.</StyledText>
					</Typography>
				</ManageCard>
			</ManageCol>
			<Col xs={24} lg={8}>
				<ManageCard>
					<Typography>
						<StyledTitle level={4}>운영비 Zero</StyledTitle>
						<StyledText>운영 및 정산에 참여고객의 추가적인 운영 리소스 투입이 필요 없습니다.</StyledText>
					</Typography>
				</ManageCard>
			</Col>
			<Col xs={24} lg={8}>
				<ManageCard>
					<Typography>
						<StyledTitle level={4}>수익의 극대화</StyledTitle>
						<StyledText>빅데이터 기반 인공지능 예측 기술로 수익 창출 기회를 극대화 합니다.</StyledText>
					</Typography>
				</ManageCard>
			</Col>
		</Row>
	);
}

// 함수로 작성한 styled component를 선언하세요.

const ManageCol = styled(Col)(({ theme }) => {
	return {
		['& > .ant-card']: {
			['&:first-child']: {
				borderLeftWidth: 1,

				[`@media ${theme.mobileMedia}`]: {
					borderTopWidth: 1,
				},
			},
		},
	};
});

const ManageCard = styled(Card)(({ theme }) => {
	return {
		['&&']: {
			borderRadius: 0,
			borderLeftWidth: 0,
			['& > .ant-card-body']: {
				padding: '33px 50px',
			},

			[`@media ${theme.mobileMedia}`]: {
				borderLeftWidth: 1,
				borderTopWidth: 0,
			},
		},
	};
});

const StyledTitle = styled(Typography.Title)(({ theme }) => {
	return {
		['&&']: {
			marginBottom: 12,
			color: theme.primaryColor,
		},
	};
});

const StyledText = styled(Typography.Text)(({ theme }) => {
	return {
		['&&']: {
			whiteSpace: 'pre-wrap',
			wordBreak: 'keep-all',
		},
	};
});
