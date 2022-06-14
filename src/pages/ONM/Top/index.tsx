import styled from 'styled-components';
import SectionHeader from '../SectionHeader';
import { Inner } from '@root/src/components';
import { Row, Col, Typography, Card, Image, Button, List } from 'antd';
import { introductionList } from '../configs/values';
import { IntroProps } from '../configs';

export default function Top() {
	return (
		<Inner bgcolor="#f6f7f9" padding="100px 0 140px">
			<>
				<BannerContainer bgimage={require('@src/assets/images/pages/onm/img_top_event_banner.png').default}>
					<Col span={24}>
						<BannerSubTitle>관리왕 런칭 이벤트</BannerSubTitle>
						<BannerTitle level={2}>지금 관리왕 신청하면 80만원 상당의 혜택을 드려요!</BannerTitle>
						<BannerDescription>모니터링 기기값 + 설치비(교체비)가 완전 무료!</BannerDescription>
					</Col>
				</BannerContainer>
				<SectionHeader
					title={`당신의 발전소 수익을 지키는
관리왕(O&M)이란?`}
				>
					<TitleDescription>
						단 한 번의 신청으로 솔라커넥트 전문가가
						<br /> 365일 당신의 발전소를 알아서 관리해드리는 정기 지원 서비스입니다.
					</TitleDescription>
				</SectionHeader>
				<List
					dataSource={introductionList}
					grid={{ gutter: 24, column: 2 }}
					renderItem={(item: IntroProps, index: number) => (
						<List.Item
							key={index}
							onClick={() => {
								//
							}}
						>
							<ServiceItem src={item.src}>
								<ServiceTitle level={2}>{item.title}</ServiceTitle>
								<ServiceButton type="primary" size="small">
									알아보기 <ServiceArrowImage preview={false} src={require('@src/assets/images/pages/onm/img_service_more_arrow.png').default} />
								</ServiceButton>
							</ServiceItem>
						</List.Item>
					)}
				/>
			</>
		</Inner>
	);
}

const BannerContainer = styled(Row)(({ bgimage }: { bgimage: string }) => ({
	['&.ant-row']: {
		borderRadius: 20,
		backgroundImage: `url(${bgimage}), linear-gradient(180deg, #182437 0%, #2f4264 100%)`,
		backgroundSize: 'auto 100%',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'right bottom',
		height: 240,
		alignItems: 'center',
		paddingLeft: 56,
	},
}));
const BannerSubTitle = styled(Typography.Paragraph)(({ theme }) => ({
	'&.ant-typography': {
		color: theme.yellow1,
		fontSize: 18,
		letterSpacing: -0.7,
		fontFamily: theme.fontFamilyTitle,
		lineHeight: '26px',
		margin: 0,
	},
}));
const BannerTitle = styled(Typography.Title)(({ theme }) => ({
	'&&.ant-typography': {
		color: theme.white,
		fontFamily: theme.fontFamilyTitle,
		fontSize: 32,
		marginTop: 4,
		lineHeight: '44px',
	},
}));
const BannerDescription = styled(Typography.Paragraph)(({ theme }) => ({
	'&&.ant-typography': {
		color: theme.lightGrey2,
		fontSize: 16,
		letterSpacing: -0.5,
		lineHeight: '26px',
		marginTop: 4,
	},
}));
const TitleDescription = styled(Typography.Paragraph)(({ theme }) => ({
	marginTop: 16,
	color: theme.grey4,
	fontSize: 16,
	lineHeight: '26px',
	letterSpacing: -0.5,
}));
const ServiceItem = styled(Card)(({ src }: { src: string }) => ({
	'&.ant-card': {
		height: 400,
		backgroundImage: `url(${src})`,
		backgroundSize: 'cover',
		borderRadius: 20,
	},
	'& .ant-card-body': {
		padding: 40,
	},
}));
const ServiceTitle = styled(Typography.Title)(({ theme }) => ({
	'&&.ant-typography': {
		fontSize: 34,
		lineHeight: '44px',
		letterSpacing: -0.3,
		whiteSpace: 'pre-line',
		color: '#fff',
		fontFamily: theme.fontFamilyTitle,
	},
}));
const ServiceArrowImage = styled(Image)({
	'&.ant-image-img': {
		width: 16,
		height: 16,
		marginLeft: 6,
	},
});
const ServiceButton = styled(Button)({
	background: 'rgba(255, 255, 255, 0.3)',
	border: 0,
	alignItems: 'center',
	marginTop: 16,
	display: 'flex',
	'&:hover,&:focus': {
		background: 'rgba(255, 255, 255, 0.3)',
	},
});
