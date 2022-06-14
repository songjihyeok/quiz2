import { ReactElement } from 'react';
import { Layout, Affix, Row, Col } from 'antd';
import styled from 'styled-components';

import { useResponse } from '@src/context/response';

import { Provider } from './Provider';
import { Navigation, LogoWrap, Hamburger } from './components';

const StyledRow = styled(Row)`
	padding: 0 24px;
	max-width: ${(styleProps) => styleProps.theme.maxWidth};
	margin: 0 auto;
`;

const StyledAffix = styled(Affix)`
	& > .ant-affix {
		background-color: ${(styleProps) => styleProps.theme.white};
		box-shadow: 0px 4px 28px rgba(0, 0, 0, 0.1);
	}
`;

const StyledHeader = styled(Layout.Header)`
	@media ${(styleProps) => styleProps.theme.mobileMedia} {
		height: ${(styleProps) => styleProps.theme.layoutHeaderHeightMobile};
		line-height: ${(styleProps) => styleProps.theme.layoutHeaderHeightMobile};
	}
`;

export default function Header(): ReactElement {
	const isMobile = useResponse();

	return (
		<Provider>
			<StyledHeader>
				<StyledAffix offsetTop={0} style={{ backgroundColor: '#fff', boxShadow: '0px 4px 28px rgba(0, 0, 0, 0.1)' }}>
					<StyledRow justify="space-between" align="middle">
						<LogoWrap />

						<Col flex="1 1 auto" style={isMobile ? { textAlign: 'right' } : {}}>
							{isMobile ? <Hamburger /> : <Navigation />}
						</Col>
					</StyledRow>
				</StyledAffix>
			</StyledHeader>
		</Provider>
	);
}
