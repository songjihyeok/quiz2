import { ReactElement } from 'react';
import { Skeleton } from 'antd';
import styled from 'styled-components';

import { IVisualProps } from '../Visual';
import useBanner from './useBanner';

interface IBackgroundSrcProps {
	readonly src: string;
}

const StyledImage = styled.div<IBackgroundSrcProps>`
	height: 640px;
	background: url('${(styleProps) => styleProps.src}') center center / cover no-repeat;
`;

const StyledSkeletonImage = styled(Skeleton.Image)`
	width: 100%;
	height: 640px;

	& > .ant-skeleton-image {
		width: 100%;
		height: 100%;
	}
`;

export default function Banner(props: IVisualProps): ReactElement {
	const { src, error } = useBanner(props.path);

	if (error) {
		return <></>;
	}

	if (src) {
		return <StyledImage src={src} />;
	}
	return <StyledSkeletonImage />;
}
