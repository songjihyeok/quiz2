import { ReactElement } from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';

import { SiteMap, Info } from './components';

const StyledCol = styled(Col)`
	border-top: 1px solid ${(styleProps) => styleProps.theme.borderColorSplit};
`;

export default function Footer(): ReactElement {
	return (
		<Row>
			<StyledCol span={24}>
				<SiteMap />
			</StyledCol>
			<Col span={24}>
				<Info />
			</Col>
		</Row>
	);
}
