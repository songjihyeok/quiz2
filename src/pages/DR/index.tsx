// import dependency modules : package.json에 명시된 외부모듈을 선언하세요.
import React from 'react';
import { Row, Col, Typography } from 'antd';
import styled from 'styled-components';

// import global modules : 서비스 전역에서 사용중인 모듈을 선언하세요.
import { Section } from '@src/components';

// import local modules : 지역(route)에서 사용중인 모듈을 선언하세요.
import { values, ContentItem } from './configs';

export default function DR() {
	const renderTitle = ({ title, description }: ContentItem) => {
		return (
			<>
				{title ? (
					<Col span={24}>
						<StyledTitle level={2}>{title}</StyledTitle>
					</Col>
				) : null}
				{description ? (
					<Col span={24}>
						<StyledText>{description}</StyledText>
					</Col>
				) : null}
			</>
		);
	};

	return (
		<DRRow>
			{values.contents.map((content: ContentItem, idx) => {
				const Component: React.ElementType = content.component;
				return (
					<DRCol key={content.key} span={24}>
						<Section backgroundColor={idx % 2 !== 0 ? '#f7f7f7' : ''} maxWidth={1024}>
							{renderTitle(content)}
							<React.Suspense fallback={<div>loading</div>}>{Component ? <Component key={`${content.key}-${idx}`} articles={content.articles} /> : null}</React.Suspense>
						</Section>
					</DRCol>
				);
			})}
		</DRRow>
	);
}

// 함수로 작성한 styled component를 선언하세요.
const DRRow = styled(Row)(() => {
	return {};
});

const DRCol = styled(Col)(() => {
	return {
		padding: '80px 16px 120px',
	};
});

const StyledWrapper = styled(Row)({
	maxWidth: 1024,
	margin: '0 auto',
	textAlign: 'center',
	padding: '80px 16px 120px',
});

const StyledTitle = styled(Typography.Title)(({ theme }) => {
	return {
		['&&']: {
			marginBottom: 40,
		},
	};
});

const StyledText = styled(Typography.Text)(({ theme }) => {
	return {
		whiteSpace: 'pre-wrap',
		marginBottom: 40,
		display: 'inline-block',
		[`@media ${theme.mobileMedia}`]: {
			whiteSpace: 'normal',
		},
	};
});
