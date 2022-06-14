import Icon from '@ant-design/icons';
import styled, { DefaultTheme } from 'styled-components';
import SectionHeader from '../SectionHeader';
import { Inner } from '@root/src/components';
import { Row, List, Select, Typography, Col } from 'antd';
import { ReactComponent as IconChecked } from '@src/assets/images/pages/onm/icon_check.svg';
import { productList, productSelectList } from '../configs/values';
import { useCapacity, useChangeCapacity, Provider } from './Provider';
import { ProductSelectProps } from '../configs';
import { ProductProps, ProductServiceListProps } from '../configs/types';

export default function Product() {
	const capacity = useCapacity();
	const onChangeCapacity = useChangeCapacity();

	return (
		<Provider>
			<Inner padding="0 0 140px">
				<>
					<SectionHeader
						title={`관리왕 상품을
특별 할인가로 만나보세요!`}
					>
						<>
							<SelectContainer justify="center" align="middle">
								<Col>
									<Label>내 발전소 용량은?</Label>
								</Col>
								<Col>
									<SelectBox showArrow={false} onChange={onChangeCapacity} value={capacity}>
										{productSelectList.map(({ value, label }: ProductSelectProps, index: number) => (
											<Select.Option key={index} value={value}>
												{label}
											</Select.Option>
										))}
									</SelectBox>
								</Col>
							</SelectContainer>
							<Description>300kW 초과 발전소의 경우 고객센터를 통해 문의 부탁드립니다.</Description>
						</>
					</SectionHeader>

					<ProductList
						grid={{ gutter: 20, column: 4 }}
						dataSource={productList}
						renderItem={(item, index) => {
							const { title, priceList, isdiscount, serviceList } = item as ProductProps;
							return (
								<List.Item className="product-item" key={index}>
									<Title>{title}</Title>
									{index === 2 && <RecommendLabel>추천</RecommendLabel>}
									{priceList[capacity - 1]?.initialPrice && (
										<PriceRow>
											<OriginPrice>{priceList[capacity - 1]?.initialPrice}</OriginPrice>
											<Percentage>{priceList[capacity - 1]?.percentage}</Percentage>
										</PriceRow>
									)}
									<Price isdiscount={String(isdiscount)}>{priceList[capacity - 1]?.price}</Price>
									<ServiceList
										grid={{ gutter: 16, column: 1 }}
										dataSource={serviceList}
										renderItem={(inner, index) => {
											const { name, isoffer } = inner as ProductServiceListProps;
											return (
												<ServiceItem key={index} isoffer={String(isoffer)}>
													<Icon component={IconChecked} />
													<ServiceText>{name}</ServiceText>
												</ServiceItem>
											);
										}}
									/>
								</List.Item>
							);
						}}
					/>
					<Description>
						*1년 약정 기준, VAT 별도
						<br />
						*관리왕 O&#38;M 관리 운영 및 계약은 엔라이튼의 100% 지분을 가진 자회사 솔라웍스와 진행됩니다.
					</Description>
				</>
			</Inner>
		</Provider>
	);
}

const SelectContainer = styled(Row)({
	marginTop: 40,
	textAlign: 'left',
});
const SelectBox = styled(Select)(({ theme }) => ({
	['&.ant-select:not(.ant-select-customize-input) .ant-select-selector']: {
		marginLeft: 12,
		width: 280,
		borderColor: theme.lightGrey2,
		fontSize: 22,
		color: theme.purpleBase,
		padding: '0 16px',
		background: `url(${require('@src/assets/images/pages/onm/icon_select_arrow.png').default}) no-repeat`,
		backgroundSize: '24px 52px',
		backgroundPosition: 'right 16px top',
		textAlign: 'left',
	},
}));
const Label = styled(Typography)(({ theme }) => ({
	fontSize: 22,
	lineHeight: '32px',
	color: theme.darkGrey3,
}));
const Description = styled(Typography)(({ theme }) => ({
	marginTop: 16,
	color: theme.grey2,
	fontSize: 14,
	lineHeight: '24px',
	letterSpacing: 0,
	textAlign: 'center',
}));

const ProductList = styled(List)(({ theme }: { theme: DefaultTheme; isRecommended?: boolean }) => ({
	['&.ant-list-grid']: {
		paddingBottom: 16,
		['.ant-col > .ant-list-item.product-item']: {
			border: `1px solid ${theme.lightGrey3}`,
			borderRadius: 20,
			padding: 40,
			margin: 0,
			minHeight: 374,
		},
		['& div:nth-child(3) .ant-col > .ant-list-item.product-item']: {
			border: `2px solid ${theme.purpleBase}`,
		},
	},
}));
const Title = styled(Typography.Text)(({ theme }) => ({
	fontSize: 20,
	color: theme.darkGrey3,
	lineHeight: '30px',
	fontFamily: theme.fontFamilyTitle,
	letterSpacing: 0,
}));
const Price = styled(Typography)<{ isdiscount?: string }>(({ theme, isdiscount }: { theme: DefaultTheme; isdiscount?: string }) => ({
	fontFamily: theme.fontFamilyTitle,
	fontSize: 28,
	lineHeight: '38px',
	color: isdiscount === 'true' ? theme.purpleBase : theme.darkGrey3,
}));
const PriceRow = styled(Row)({ marginTop: 10 });
const OriginPrice = styled(Typography.Text)(({ theme }) => ({
	color: theme.grey1,
	fontSize: 14,
	letterSpacing: -0.5,
	textDecoration: 'line-through',
}));
const Percentage = styled(Typography.Text)(({ theme }) => ({
	color: theme.redBase,
	fontSize: 14,
	letterSpacing: -0.5,
	display: 'inline-block',
	marginLeft: 4,
}));
const ServiceList = styled(List)({
	['&.ant-list']: {
		marginTop: 40,
		['.ant-list-item']: {
			border: 0,
			padding: 0,
		},
	},
});
const ServiceItem = styled(List.Item)(({ theme, isoffer }: { theme: DefaultTheme; isoffer: string }) => ({
	['& svg path']: {
		fill: isoffer === 'true' ? theme.purpleBase : theme.lightGrey3,
	},
}));
const ServiceText = styled(Typography.Text)({
	marginLeft: 10,
});
const RecommendLabel = styled(Typography.Text)(({ theme }) => ({
	background: theme.purpleBase,
	color: theme.white,
	width: 42,
	height: 24,
	lineHeight: '24px',
	fontSize: 14,
	marginLeft: 6,
	fontFamily: theme.fontFamilyTitle,
	borderRadius: 4,
	display: 'inline-block',
	textAlign: 'center',
}));
