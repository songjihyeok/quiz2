import styled, { DefaultTheme } from 'styled-components';
import SectionHeader from '../SectionHeader';
import { Col, Carousel, Typography } from 'antd';
import { reportList } from '../configs/values';
import { ReportServiceProps } from '../configs';

export default function Report() {
	return (
		<Container span={24}>
			<SectionHeader
				index={4}
				title={`365일 당신의 발전소를 지키는 
발전 보고 서비스`}
			/>
			<ReportCarousel draggable swipeToSlide arrows slidesToShow={3} touchThreshold={10} dots={false} infinite={false}>
				{reportList.map(({ title, description, src }: ReportServiceProps, index) => (
					<ReportItem key={index} bgimage={src}>
						<ReportTitle level={3}>{title}</ReportTitle>
						<ReportDescription>{description}</ReportDescription>
					</ReportItem>
				))}
			</ReportCarousel>
		</Container>
	);
}

const Container = styled(Col)(({}) => ({
	background: '#f6f7f9',
	padding: '0 0 140px',
	overflow: 'hidden',
	['& .ant-carousel']: {
		['.slick-slider']: {
			paddingBottom: 80,
		},
		['.slick-list']: {
			overflow: 'visible',
		},
		['.slick-arrow']: {
			top: 'auto',
			bottom: 0,
			width: 48,
			height: 48,
			background: `url(${require('@src/assets/images/pages/onm/icon_carousel_arrow.png').default}) no-repeat`,
			backgroundSize: 'contain',
			left: '50%',
			marginLeft: 32,
			['&:focus,&:hover']: {
				background: `url(${require('@src/assets/images/pages/onm/icon_carousel_arrow.png').default}) no-repeat`,
				backgroundSize: 'contain',
			},
			['&.slick-disabled']: {
				background: `url(${require('@src/assets/images/pages/onm/icon_carousel_arrow_disabled.png').default}) no-repeat`,
				backgroundSize: 'contain',
			},
			['&.slick-next']: {
				right: 'auto',
				transform: 'rotate(180deg)',
			},
			['&.slick-prev']: {
				left: '50%',
				marginLeft: -32,
			},
		},
	},
}));

const ReportCarousel = styled(Carousel)({
	maxWidth: 1440,
	margin: '0 auto 0',
	['& .slick-slide']: {
		paddingRight: 24,
	},
});
const ReportItem = styled.div(({ theme, bgimage }: { theme: DefaultTheme; bgimage: string }) => ({
	height: 700,
	borderRadius: 20,
	padding: '40px 40px 0',
	background: `${theme.white} url(${bgimage})`,
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'bottom center',
	backgroundSize: 'contain',
	boxShadow: '0 4 10 rgba(0, 0, 0, 0.05)',
}));
const ReportTitle = styled(Typography.Title)(({ theme }) => ({
	['&&&.ant-typography']: {
		fontSize: 27,
		fontFamily: theme.fontFamilyTitle,
		lineHeight: '38px',
		color: theme.darkGrey3,
	},
}));
const ReportDescription = styled(Typography.Paragraph)(({ theme }) => ({
	['&&.ant-typography']: {
		marginTop: 6,
		fontSize: 16,
		lineHeight: '26px',
		color: theme.darkGrey1,
	},
}));
