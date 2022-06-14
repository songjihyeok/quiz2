// import dependency modules : package.json에 명시된 외부모듈을 선언하세요.

import { Row, Col, Divider, PageHeader, Typography } from 'antd';
import styled from 'styled-components';

// import global modules : 서비스 전역에서 사용중인 모듈을 선언하세요.
import { useResponse } from '@root/src/context/response';

// import local modules : 지역(route)에서 사용중인 모듈을 선언하세요.

export default function Join() {
	const isMoblie = useResponse();

	console.log('isMoblie', isMoblie);
	return (
		<Row align="middle" gutter={[16, 0]}>
			<Col xs={24} lg={11}>
				<StyledPageHeader
					title="01"
					subTitle={
						<Typography>
							<InnerTitle level={3}>신뢰성 DR</InnerTitle>
							<InnerText>피크감축DR, 의무적 감축, 실시간 급전지시</InnerText>
						</Typography>
					}
				>
					{isMoblie && (
						<StyledParagraph>
							감축용량을 사전에 계약하고 전력거래소가 계약용량에 대해 수요감축요청을 발령하면 의무적으로 부하를 감축 전력거래소의 수요감축요청에 응동하여 최대수요를 삭감, 수급불안정에 대응
						</StyledParagraph>
					)}
				</StyledPageHeader>
			</Col>
			<WebCol xs={0} lg={2}>
				<StyledDivider type="vertical" />
			</WebCol>
			<Col xs={24} lg={11}>
				<StyledPageHeader
					title="02"
					subTitle={
						<Typography>
							<InnerTitle level={3}>경제성 DR</InnerTitle>
							<InnerText>요금절감DR, 자발적 감축, 하루전 전력거래</InnerText>
						</Typography>
					}
				>
					{isMoblie && (
						<StyledParagraph>
							하루 전 시장에서 발전자원과 경쟁적으로 가격을 입찰하여 발전가격보다 저렴한 경우 낙찰되며 자발적으로 낙찰된 부하를 감축 등록 용량과 관계없이 거래일에 대한 감축가능용량과 감축가격을 입찰
						</StyledParagraph>
					)}
				</StyledPageHeader>
			</Col>
		</Row>
	);
}

// 함수로 작성한 styled component를 선언하세요.

const StyledPageHeader = styled(PageHeader)(({ theme }) => {
	return {
		['&&']: {
			padding: '0 0 16px',
			['& > .ant-page-header-heading']: {
				justifyContent: 'center',

				[`@media ${theme.mobileMedia}`]: {
					justifyContent: 'flex-start',
				},
				['& > .ant-page-header-heading-left']: {
					margin: 0,
					['& > .ant-page-header-heading-title']: {
						marginRight: 16,
						fontSize: 60,
						lineHeight: '64px',
						color: theme.primaryColor,
						fontFamily: theme.fontFamilyMedium,
					},
				},
			},
		},
	};
});

const InnerTitle = styled(Typography.Title)(({ theme }) => {
	return {
		['&&']: {
			fontSize: 24,
			textAlign: 'left',
			color: theme.primaryColor,
		},
	};
});

const InnerText = styled(Typography.Text)(({ theme }) => {
	return {
		['&&']: {
			fontSize: theme.fontSizeLg,
			textAlign: 'left',
			color: theme.primaryColor,
		},
	};
});

const StyledDivider = styled(Divider)(({ theme }) => {
	return {
		height: 80,
		borderLeftColor: theme.borderColorBase,
	};
});

const WebCol = styled(Col)(({ theme }) => {
	return {
		[`@media ${theme.mobileMedia}`]: {
			display: 'none',
		},
	};
});

const StyledParagraph = styled(Typography.Paragraph)(({ theme }) => {
	return {
		['&&']: {
			textAlign: 'left',
			whiteSpace: 'pre-wrap',
			wordBreak: 'keep-all',
		},
	};
});
