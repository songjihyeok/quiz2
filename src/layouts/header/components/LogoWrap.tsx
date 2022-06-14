import { ReactElement } from 'react';
import { Col } from 'antd';
import styled from 'styled-components';

import { Logo } from '@src/components';

import { useLogoRef } from '../Provider';

const StyledLogoWrap = styled(Col)`
	height: ${(styleProps) => styleProps.theme.layoutHeaderHeight};
	max-width: 354px;

	& > .anticon {
		font-size: 158px;

		& > svg {
			height: ${(styleProps) => styleProps.theme.layoutHeaderHeight};
		}
	}

	@media ${(styleProps) => styleProps.theme.mobileMedia} {
		height: ${(styleProps) => styleProps.theme.layoutHeaderHeightMobile};

		& > .anticon {
			font-size: 146px;

			& > svg {
				height: ${(styleProps) => styleProps.theme.layoutHeaderHeightMobile};
			}
		}
	}
`;

export default function LogoWrap(): ReactElement {
	return (
		<StyledLogoWrap flex="1 1 auto" ref={useLogoRef()}>
			<Logo colorful={true} svgStyle={{ height: 'inherit', verticalAlign: 'middle' }} />
		</StyledLogoWrap>
	);
}
