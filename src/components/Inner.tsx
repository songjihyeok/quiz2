import { Col } from 'antd';
import styled from 'styled-components';

export interface InnerProps {
	children?: React.ReactElement;
	bgcolor?: string;
	padding?: string;
}

const StyledInnerContainer = styled(Col)<{ bgcolor?: string; padding?: string }>`
	background: ${(stypeProps) => stypeProps.bgcolor || '#fff'};
	padding: ${(stypeProps) => stypeProps.padding || 0};
`;
const StyledInner = styled(Col)`
	max-width: 1440px;
	padding: 0 24px;
	margin: 0 auto;
`;

export default function Inner({ children, bgcolor, padding }: InnerProps) {
	return (
		<StyledInnerContainer span={24} bgcolor={bgcolor} padding={padding}>
			<StyledInner span={24}>{children}</StyledInner>
		</StyledInnerContainer>
	);
}
