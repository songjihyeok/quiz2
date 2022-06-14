import { ReactElement, useCallback } from 'react';
import { Drawer, Menu, Button, Row, Col, Typography } from 'antd';
import Icon from '@ant-design/icons';
import styled, { createGlobalStyle } from 'styled-components';
import { useLocation, NavLink, Link } from 'react-router-dom';

import { service } from '@src/configs';

import { ReactComponent as IconHamburger } from '@src/assets/images/hamburger.svg';
import { ReactComponent as IconClose } from '@src/assets/images/close.svg';
import { ReactComponent as IconArrow } from '@src/assets/images/arrow.svg';
import { ReactComponent as IconBack } from '@src/assets/images/back.svg';

import { useHamburger } from './useHamburger';

const StyledIcon = styled(Icon)`
	font-size: 24px;
	vertical-align: middle;
	cursor: pointer;
	width: 40px;
	height: 40px;
	line-height: 40px;
	padding: 8px;

	& > svg {
		vertical-align: top;
	}
`;

const StyledArrowIcon = styled(Icon)`
	color: ${(styleProps) => styleProps.theme.grey1};
`;

interface IGlobalProps {
	readonly visible: string;
}

const GlobalStyle = createGlobalStyle<IGlobalProps>`
  body {
    ${(styleProps) => {
			if (styleProps.visible === 'true') {
				return { overflow: 'hidden' };
			}
			return;
		}}
  }
`;

const StyledMenu = styled(Menu)`
	& > .ant-menu-submenu {
		& > .ant-menu-submenu-title {
			height: ${(styleProps) => styleProps.theme.heightLg};
			line-height: ${(styleProps) => styleProps.theme.heightLg};
			margin: 0;
			padding: 0 40px 0 24px;
			.ant-menu-title-content {
				display: inline-block;
				line-height: 28px;
				font-family: ${(styleProps) => styleProps.theme.fontFamilyTitle};
				font-size: ${(styleProps) => styleProps.theme.fontSizeLg};
			}

			.anticon {
				right: 24px;
			}
		}
	}

	& > .ant-menu-item {
		&.ant-menu-item-only-child {
			height: 70px;
			margin: 0;
			line-height: 1.5;
			padding: 13px 24px 11px;

			.ant-menu-title-content {
				h5.ant-typography,
				.ant-typography h5 {
					font-family: ${(styleProps) => styleProps.theme.fontFamilyMedium};
				}
				.ant-typography span {
					font-size: 12px;
					color: ${(styleProps) => styleProps.theme.grey4};
				}
			}
		}
	}
`;

export default function Hamburger(): ReactElement {
	const { visible, setVisible, onSelect, menus, selected, childVisible, currentMenu, childMenus } = useHamburger();
	const location = useLocation();

	const onReset = useCallback(() => {
		onSelect(undefined);
		setVisible(false);
	}, []);

	const bannerImg = <img src={service.getValue(currentMenu, 'banner.src.default')} alt={service.getValue(currentMenu, 'title', '')} style={{ width: '100%', height: '100%' }} />;

	return (
		<>
			<GlobalStyle visible={visible.toString()} />
			<StyledIcon component={visible ? IconClose : IconHamburger} onClick={() => setVisible((state) => !state)} />

			<Drawer
				width="100vw"
				visible={visible}
				style={{ boxShadow: 'none', top: 64, height: window.innerHeight - 64 }}
				bodyStyle={{ overflowX: 'hidden', overflowY: 'auto', height: window.innerHeight - 64, padding: 0 }}
				contentWrapperStyle={{ boxShadow: 'none' }}
				closable={false}
				headerStyle={{ display: 'none' }}
				mask={false}
				maskClosable={false}
			>
				<StyledMenu mode="vertical" style={{ border: 'none' }} expandIcon={<StyledArrowIcon component={IconArrow} />} selectedKeys={selected ? [selected] : []}>
					{menus.map((menu) => {
						return <Menu.SubMenu key={menu.key} title={menu.title} onTitleClick={({ key }) => onSelect(key)} />;
					})}
				</StyledMenu>

				<Drawer
					width="100vw"
					visible={childVisible}
					style={{ boxShadow: 'none' }}
					bodyStyle={{ overflowX: 'hidden', overflowY: 'auto', padding: 0, height: window.innerHeight - 62 }}
					contentWrapperStyle={{ boxShadow: 'none' }}
					headerStyle={{ padding: 12, borderBottom: 'none' }}
					title={
						<Row justify="space-between" align="top">
							<Col flex="0 0 40px">
								<Button icon={<Icon component={IconBack} style={{ fontSize: 24, color: '#1d1e1f' }} />} style={{ width: 38, height: 38, padding: 0 }} type="link" onClick={() => onSelect(undefined)} />
							</Col>
							<Col>
								<Typography.Title level={4} style={{ fontWeight: 'normal', fontFamily: 'Bold', lineHeight: '38px' }}>
									{currentMenu?.title}
								</Typography.Title>
							</Col>
							<Col flex="0 0 40px">
								<Button
									icon={<Icon component={IconClose} style={{ fontSize: 24, color: '#1d1e1f' }} />}
									style={{ width: 38, height: 38, padding: 0 }}
									type="link"
									onClick={() => onSelect(undefined)}
								/>
							</Col>
						</Row>
					}
					mask={false}
					maskClosable={false}
					closable={false}
				>
					<Row justify="space-between" align="stretch" style={{ flexDirection: 'column', height: '100%' }}>
						<Col>
							<StyledMenu mode="vertical" style={{ border: 'none' }}>
								{childMenus.map(({ key, title, linkTo, attribute }) => {
									const link = (
										<Typography>
											<Typography.Title level={5}>{title}</Typography.Title>
											<Typography.Text>{service.getValue(attribute, 'description', '')}</Typography.Text>
										</Typography>
									);

									return (
										<Menu.Item key={key} onClick={() => onReset()}>
											{linkTo ? (
												<a href={linkTo} target="_blank" rel="noreferrer" style={{ display: 'block' }}>
													{link}
												</a>
											) : (
												<NavLink to={key} className={({ isActive }) => (isActive && location.pathname.indexOf(`/${key}`) === 0 ? 'active' : '')}>
													{link}
												</NavLink>
											)}
										</Menu.Item>
									);
								})}
							</StyledMenu>
						</Col>

						{currentMenu && currentMenu.banner ? (
							<Col style={{ padding: 24 }}>
								{service.getValue(currentMenu, 'banner.linkTo').indexOf('https') !== -1 ? (
									<a href={service.getValue(currentMenu, 'banner.linkTo')} target="_blank" rel="noreferrer">
										{bannerImg}
									</a>
								) : (
									<Link to={service.getValue(currentMenu, 'banner.linkTo')}>{bannerImg}</Link>
								)}
							</Col>
						) : null}
					</Row>
				</Drawer>
			</Drawer>
		</>
	);
}
