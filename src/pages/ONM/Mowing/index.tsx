import styled from 'styled-components';
import SectionHeader from '../SectionHeader';
import { Inner } from '@root/src/components';
import { Image, List, Typography } from 'antd';
import { mowingList } from '../configs/values';
import { MowingServiceProps } from '../configs';

export default function Mowing() {
	return (
		<Inner padding="0 0 140px">
			<>
				<SectionHeader
					index={1}
					title={`필요한 시기에 알아서 다 해주는
    전문 예초 관리`}
				/>
				<List
					grid={{ gutter: 24, column: 3 }}
					dataSource={mowingList}
					renderItem={(item: MowingServiceProps, index) => (
						<List.Item key={index}>
							<Image src={item.src} preview={false} />
							<Title level={3}>{item.title}</Title>
							<Description>{item.description}</Description>
						</List.Item>
					)}
				/>
			</>
		</Inner>
	);
}

const Title = styled(Typography.Title)(({ theme }) => ({
	fontSize: 28,
	marginTop: 30,
	fontFamily: theme.fontFamilyTitle,
	whiteSpace: 'pre-line',
	letterSpacing: -0.3,
}));
const Description = styled(Typography.Paragraph)(({ theme }) => ({
	marginTop: 10,
	fontSize: 16,
	letterSpacing: -0.5,
	color: theme.darkGrey1,
}));
