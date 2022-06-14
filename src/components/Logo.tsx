import { ReactElement } from 'react';
import Icon from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// color가 있는 로고
import { ReactComponent as ImgLogo } from '@src/assets/images/logo.svg';

// color가 없는 로고
import { ReactComponent as ImgLogoTransparent } from '@src/assets/images/logo_transparent.svg';

interface LogoProps {
	style?: React.CSSProperties;
	svgStyle?: React.CSSProperties;
	colorful?: boolean;
}

interface LogoSVGProps {
	readonly ['svg-style']: React.CSSProperties;
}
const StyledLogo = styled(Icon)<LogoSVGProps>`
	cursor: pointer;
	& > svg {
		${(styleProps) => {
			return {
				...styleProps['svg-style'],
			};
		}}
	}
`;

export default function Logo(props: LogoProps): ReactElement {
	const navigate = useNavigate();

	return <StyledLogo component={props.colorful ? ImgLogo : ImgLogoTransparent} onClick={() => navigate('/')} style={{ ...props.style }} svg-style={{ ...props.svgStyle }} />;
}
