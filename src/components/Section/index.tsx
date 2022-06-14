// import dependency modules : package.json에 명시된 외부모듈을 선언하세요.
import { Row, Col } from 'antd';
import styled, { DefaultTheme } from 'styled-components';

// import global modules : 서비스 전역에서 사용중인 모듈을 선언하세요.

// import local modules : 지역(route)에서 사용중인 모듈을 선언하세요.

export interface SectionProps {
	children: React.ReactElement[];
	backgroundColor?: string;
	padding?: string;
	maxWidth?: number | string;
}

export default function Section(props: SectionProps) {
	const { children, backgroundColor, padding, maxWidth } = props;

	return (
		<SectionRow color={backgroundColor}>
			<SectionCol span={24} props={{ padding, maxWidth }}>
				{children}
			</SectionCol>
		</SectionRow>
	);
}

// 함수로 작성한 styled component를 선언하세요.
const SectionRow = styled(Row)(({ theme, color }: { theme: DefaultTheme; color: SectionProps['backgroundColor'] }) => {
	return {
		backgroundColor: color || theme.white,
	};
});

const SectionCol = styled(Col)(({ theme, props }: { theme: DefaultTheme; props: { padding: SectionProps['padding']; maxWidth: SectionProps['maxWidth'] } }) => {
	return {
		maxWidth: props.maxWidth ? (typeof props.maxWidth === 'number' ? props.maxWidth : `${props.maxWidth}`) : theme.maxWidth,
		margin: '0 auto',
		textAlign: 'center' as const,
		padding: props.padding || '80px 16px 120px',
	};
});
