import styled from 'styled-components';
import { Row, Col, Typography } from 'antd';

interface TextHeaderProps {
	title: string;
	children?: React.ReactElement;
	index?: number;
}

export default function SectionHeader({ title, children, index }: TextHeaderProps) {
	return (
		<Container align="middle">
			{index && (
				<Col span={24}>
					<Index>{index}</Index>
				</Col>
			)}
			<Col span={24}>
				<Title level={2}>{title}</Title>
			</Col>
			{children && <Col span={24}>{children}</Col>}
		</Container>
	);
}

const Container = styled(Row)({
	padding: '100px 0 56px',
	textAlign: 'center',
});
const Title = styled(Typography.Title)(({ theme }) => ({
	['&&.ant-typography']: {
		fontSize: 40,
		color: theme.darkGrey3,
		lineHeight: '52px',
		letterSpacing: -0.3,
		fontFamily: theme.fontFamilyTitle,
		whiteSpace: 'pre-line',
	},
}));
const Index = styled(Typography)(({ theme }) => ({
	['&&.ant-typography']: {
		borderRadius: '50%',
		width: 38,
		height: 38,
		border: `1px solid ${theme.purpleBase}`,
		lineHeight: '38px',
		fontSize: 20,
		fontFamily: theme.fontFamilyTitle,
		color: theme.purpleBase,
		margin: '0 auto 16px',
	},
}));
