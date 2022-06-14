import Icon from '@ant-design/icons';
import styled from 'styled-components';
import { Inner } from '@root/src/components';
import { Row, Col, List, Typography, Image } from 'antd';
import { ReactComponent as ImgChecked } from '@src/assets/images/pages/onm/icon_event_checked.svg';
import { eventList } from '../configs/values';

export default function Event() {
	return (
		<Inner bgcolor="linear-gradient(180deg, #182437 0%, #2F4264 100%)">
			<Background bgimage={require('@src/assets/images/pages/onm/img-event-phone.png').default}>
				<Col span={24}>
					<Description>런칭 기념 한정 혜택</Description>
					<Title>
						발전왕 모니터링(RTU) <br />
						기기값 + 설치비가 완전 무료!
					</Title>
				</Col>
				<PriceCol span={24}>
					<PriceArrow src={require('@src/assets/images/pages/onm/img_price_discount.png').default} />
					<Price>760,000원</Price>
					<OriginPrice>0원</OriginPrice>
				</PriceCol>
				<Col span={24}>
					<EventList
						split={false}
						dataSource={eventList}
						renderItem={(item: any, index) => (
							<EventItem>
								<Icon component={ImgChecked} />
								<EventText>{item}</EventText>
							</EventItem>
						)}
					/>
				</Col>
				<EtcText>* 3년 약정 시 적용 가능</EtcText>
			</Background>
		</Inner>
	);
}

const Background = styled(Row)(({ bgimage }: { bgimage: string }) => ({
	background: `url(${bgimage})`,
	backgroundSize: 'contain',
	backgroundPosition: 'top right',
	backgroundRepeat: 'no-repeat',
	alignItems: 'center',
	padding: '202px 0',
}));
const Description = styled(Typography.Paragraph)(({ theme }) => ({
	color: theme.yellow1,
	fontSize: 18,
	lineHeight: '26px',
	letterSpacing: -0.7,
	fontFamily: theme.fontFamilyTitle,
}));
const Title = styled(Typography.Paragraph)(({ theme }) => ({
	['&.ant-typography']: {
		color: theme.white,
		fontSize: 40,
		lineHeight: '52px',
		fontFamily: theme.fontFamilyTitle,
		margin: '4px 0 0',
	},
}));
const PriceCol = styled(Col)({
	position: 'relative',
	marginTop: 14,
	['& .ant-image']: {
		left: 0,
		top: 13,
		position: 'absolute',
	},
});
const Price = styled(Typography.Text)(({ theme }) => ({
	color: '#4b5d7c',
	fontSize: 34,
	lineHeight: '44px',
	letterSpacing: 0,
	fontFamily: theme.fontFamilyTitle,
}));
const OriginPrice = styled(Price)(({ theme }) => ({
	color: theme.yellow1,
	marginLeft: 27,
}));
const PriceArrow = styled(Image)({
	['&.ant-image-img']: {
		width: 193,
		height: 14,
	},
});
const EventList = styled(List)({
	['&.ant-list']: {
		marginTop: 32,
		background: 'rgba(0, 0, 0, 0.2)',
		borderRadius: 20,
		padding: '20px 30px',
		width: 420,
		height: 130,
	},
});
const EventItem = styled(List.Item)({
	['&.ant-list-item']: {
		justifyContent: 'flex-start',
		padding: 0,
	},
});
const EventText = styled(Typography.Paragraph)(({ theme }) => ({
	['&.ant-typography']: {
		color: theme.white,
		fontSize: 16,
		lineHeight: '26px',
		fontFamily: theme.fontFamilyTitle,
		letterSpacing: 0,
		margin: '0 0 6px 10px',
	},
}));
const EtcText = styled(Typography.Paragraph)(({ theme }) => ({
	['&.ant-typography']: {
		marginTop: 16,
		color: theme.lightGrey3,
		fontSize: 14,
		lineHeight: '24px',
		letterSpacing: 0,
	},
}));
