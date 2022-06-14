import styled, { DefaultTheme } from 'styled-components';
import Icon from '@ant-design/icons';
import SectionHeader from '../SectionHeader';
import { Inner } from '@root/src/components';
import { Popover, Button, Image, Typography, List, Row, Col } from 'antd';
import { useIsVisibleTooltip, useChangeVisible, Provider } from './Provider';
import { ReactComponent as IconTooltipArrow } from '@src/assets/images/pages/onm/img_diagnose_arrow.svg';
import { diagnoseList } from '../configs/values';
import { DiagnoseServiceProps } from '../configs';

export default function Diagnose() {
	const isVisibleTooltip = useIsVisibleTooltip();
	const onChangeVisible = useChangeVisible();

	return (
		<Provider>
			<Inner bgcolor="#F6F7F9" padding="0 0 140px">
				<>
					<SectionHeader
						index={2}
						title={`국내 최고 수준의 점검 시스템을 통한
      정기적인 현장 정밀진단`}
					>
						<Tooltip
							placement="bottom"
							trigger="click"
							visible={isVisibleTooltip}
							overlayInnerStyle={popoverInnerStyles}
							onVisibleChange={onChangeVisible}
							content={
								<>
									<TooltipTitle level={3}>
										정밀진단 VS 안전관리,
										<br />
										어떻게 다른가요?
									</TooltipTitle>
									<TooltipDescription isbold="false">
										발전설비의 경우 전기를 비롯한 전문적인 기술을 기반으로 관리 및 보수가 이루어져야 하며,
										<TooltipDescription isbold="true">외관상 문제없는 발전소일지라도 발전량이 저하되고 있을 수 있습니다.</TooltipDescription> 따라서,
										<TooltipDescription isbold="true">안전관리 범위에서 벗어나는 각종 기자재 품질 및 성능, 안전성 등 종합진단이 정기적으로 이루어져야 합니다.</TooltipDescription> 이러한 문제를 미리
										대응하기 위해서는 O&#38;M 전문업체에 발전소 관리 업무를 위탁하는 것이 좋습니다. 더불어 솔라커넥트 O&#38;M 전문가는 모든 전기 기자재에 대한 안전점검뿐만 아니라 발전량 저하 원인을
										파악하고 솔루션을 제공하고 있습니다.
									</TooltipDescription>
									<TooltipCloseButton
										type="default"
										icon={<Image preview={false} src={require('@src/assets/images/pages/onm/icon_tooltip_close.png').default} />}
										onClick={() => onChangeVisible(false)}
									/>
								</>
							}
						>
							<TooltipButton type="text">
								정밀진단 vs 안전관리, 어떻게 다른가요?
								<TooltipIcon component={IconTooltipArrow} />
							</TooltipButton>
						</Tooltip>
					</SectionHeader>
					<DiagnoseList
						grid={{ gutter: 24, column: 2 }}
						dataSource={diagnoseList}
						renderItem={(item, index) => {
							const { title, description, src, caption, isVideo } = item as DiagnoseServiceProps;
							return (
								<Item key={index} bgimage={src || ''}>
									{isVideo && <Video autoPlay muted playsInline src={src} width="100%" />}
									<Title level={3}>{title}</Title>
									{description && <Description>{description}</Description>}
									{caption && <Caption>{caption}</Caption>}
								</Item>
							);
						}}
					/>
					<SectionHeader
						title={`집에서 편하게 받아보는
정밀진단 보고서`}
					/>
					<ReportImage bgimage={require('@src/assets/images/pages/onm/img_diagnose_report.png').default}>
						<ReportMockup bgimage={require('@src/assets/images/pages/onm/img_iphone_wrapper.png').default}>
							<video width="100%" autoPlay muted loop playsInline src={`${process.env.PUBLIC_URL}/video_onm_report.mp4`}></video>
						</ReportMockup>
					</ReportImage>
				</>
			</Inner>
		</Provider>
	);
}

const Tooltip = styled(Popover)({
	padding: 50,
	width: 500,
	['& .ant-popover-inner-content']: {
		padding: 40,
	},
});
const TooltipButton = styled(Button)(({ theme }) => ({
	['&.ant-btn.ant-btn-text']: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		margin: '16px auto 0',
		backgroundColor: 'transparent',
		fontFamily: theme.fontFamilyTitle,
		padding: 0,
		width: 'auto',
	},
}));
const TooltipIcon = styled(Icon)({
	['&&.anticon']: {
		marginLeft: 6,
	},
});
const popoverInnerStyles = { padding: '28px 26px', borderRadius: 20, width: 500, boxShadow: '0px 8px 14px rgba(0, 0, 0, 0.1)' };
const TooltipTitle = styled(Typography.Title)(({ theme }) => ({
	fontFamily: theme.fontFamilyTitle,
	fontSize: 28,
	lineHeight: '38px',
	marginBottom: 24,
}));
const TooltipDescription = styled(Typography.Text)(({ theme, isbold }: { theme: DefaultTheme; isbold: string }) => ({
	color: '#535659',
	fontSize: 16,
	letterSpacing: 0,
	lineHeight: '26px',
	fontFamily: isbold === 'true' ? theme.fontFamilyTitle : theme.fontFamilyMedium,
}));
const TooltipCloseButton = styled(Button)({
	['&.ant-btn.ant-btn-icon-only.ant-btn:not(.ant-btn-sm):not(.ant-btn-lg)']: {
		border: 0,
		width: 24,
		height: 24,
		padding: 0,
		position: 'absolute',
		top: 42,
		right: 42,
	},
});
const DiagnoseList = styled(List)({
	['&.ant-list-grid .ant-col > .ant-list-item']: {
		padding: 40,
	},
});
const Item = styled(List.Item)(({ bgimage }: { bgimage: string }) => ({
	['&.ant-list-item']: {
		borderRadius: 20,
		background: `url(${bgimage}) #fff no-repeat bottom center`,
		backgroundSize: 'contain',
		height: 514,
		boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
	},
}));

const Title = styled(Typography.Title)(({ theme }) => ({
	fontSize: 34,
	fontFamily: theme.fontFamilyTitle,
	lineHeight: '44px',
	color: theme.darkGrey3,
	whiteSpace: 'pre-line',
}));
const Description = styled(Typography.Paragraph)(({ theme }) => ({
	marginTop: 14,
	fontSize: 16,
	color: theme.darkGrey1,
	lineHeight: '26px',
	letterSpacing: 0,
	whiteSpace: 'pre-line',
}));
const Caption = styled(Typography.Paragraph)(({ theme }) => ({
	marginTop: 14,
	fontSize: 14,
	color: theme.grey2,
	lineHeight: '24px',
}));
const Video = styled.video({
	width: 359,
	height: 179,
	position: 'absolute',
	bottom: 97,
	left: 'calc(50% - 190px)',
});
const ReportImage = styled(Row)(({ bgimage }: { bgimage: string }) => ({
	background: `url(${bgimage})`,
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	borderRadius: 30,
	height: 724,
	width: '100%',
	justifyContent: 'center',
	alignItems: 'flex-end',
	overflow: 'hidden',
}));

const ReportMockup = styled(Col)(({ bgimage }: { bgimage: string }) => ({
	background: `url(${bgimage})`,
	backgroundSize: '100% 100%',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'bottom center',
	width: 366,
	height: 663,
	overflow: 'hidden',
	zIndex: 2,
	'& video': {
		width: 334,
		height: 648,
		margin: '15px 18px 0 18px',
		borderRadius: '44px 44px 0px 0',
		zIndex: 1,
	},
}));
