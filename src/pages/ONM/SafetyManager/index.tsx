import styled from 'styled-components';
import SectionHeader from '../SectionHeader';
import { Inner } from '@root/src/components';
import { List, Image, Typography } from 'antd';
import { safetyManagerList } from '../configs/values';
import { SafetyManagerServiceProps } from '../configs/types';

export default function SafetyManager() {
	return (
		<Inner padding="0 0 140px">
			<>
				<SectionHeader
					index={3}
					title={`현장에서 발전소를 책임지는
    안전관리자`}
				/>
				<List
					dataSource={safetyManagerList}
					grid={{ gutter: 24, column: 3 }}
					renderItem={(item: SafetyManagerServiceProps, index: number) => (
						<List.Item key={index}>
							<ItemImage src={item.src} />
							<ItemTitle level={3}>{item.title}</ItemTitle>
							<ItemDescription>{item.description}</ItemDescription>
						</List.Item>
					)}
				/>
				<CautionTitle>*안전관리 영업위탁계약</CautionTitle>
				<CautionText>
					전기안전관리법에 의거하여 엔라이튼의 업무 범위는 전기안전관리 대행 업무의 대리인으로서 계약체결을 대행하는 용역 범위에 한정되며,
					<br /> 일부 수수료를 제외한 안전관리 선임비용은 전기안전관리 대행 업체에 지급합니다.
				</CautionText>
			</>
		</Inner>
	);
}

const ItemImage = styled(Image)({ borderRadius: 20 });
const ItemTitle = styled(Typography.Title)(({ theme }) => ({
	'&&.ant-typography': {
		marginTop: 30,
		fontSize: 28,
		lineHeight: '38px',
		color: theme.darkGrey3,
		fontFamily: theme.fontFamilyTitle,
		whiteSpace: 'pre-line',
	},
}));
const ItemDescription = styled(Typography.Paragraph)(({ theme }) => ({
	marginTop: 10,
	color: theme.darkGrey1,
	fontSize: 16,
	lineHeight: '26px',
}));
const CautionText = styled(Typography.Paragraph)(({ theme }) => ({
	color: theme.grey2,
	fontSize: 14,
	lineHeight: '24px',
	textAlign: 'center',
	letterSpacing: 0,
}));
const CautionTitle = styled(CautionText)(({ theme }) => ({
	marginTop: 56,
	fontFamily: theme.fontFamilyTitle,
}));
