import { ReactElement } from 'react';
import styled from 'styled-components';
import { Row, Col, Typography, Button } from 'antd';

import { IVisualProps } from '../Visual';
import { values, VisualValueProps } from '../configs';

const StyledText = styled(Typography.Title)`
	&.ant-typography {
		font-family: ${(styleProps) => styleProps.theme.fontFamilyTitle};
		color: ${(styleProps) => styleProps.theme.textColor};
	}
`;

const StyledTitle = styled(StyledText)`
	&.ant-typography {
		font-size: 48px;
		line-height: 62px;
	}
`;

const StyledButton = styled(Button)`
	margin-top: 16px;
`;

const StyledRow = styled(Row)`
	margin: 0 auto;
	max-width: ${(styleProps) => styleProps.theme.maxWidth};
	padding: 80px 24px 56px;
`;

function RenderText(matched: VisualValueProps): ReactElement {
	if (matched.inverse) {
		return (
			<>
				<StyledTitle level={1}>{matched.title}</StyledTitle>
				<StyledText level={3}>{matched.description}</StyledText>
			</>
		);
	}
	return (
		<>
			<StyledText level={3}>{matched.description}</StyledText>
			<StyledTitle level={1}>{matched.title}</StyledTitle>
		</>
	);
}

export default function Title(props: IVisualProps): ReactElement {
	const matched: VisualValueProps | undefined = values.visuals.find(({ key }) => key === props.path);

	if (matched) {
		return (
			<StyledRow style={matched.style}>
				<Col>
					{RenderText(matched)}
					{matched.button ? <StyledButton {...matched.button}>{matched.button.children}</StyledButton> : null}
				</Col>
			</StyledRow>
		);
	}
	return <></>;
}
