import { ReactElement, useMemo, useState } from 'react';
import { Menu, Row, Col, Typography } from 'antd';
import styled from 'styled-components';
import Icon from '@ant-design/icons';
import { useResolvedPath, useMatch, NavLink } from 'react-router-dom';

import { useResponse } from '@src/context/response';
import { values } from '@src/configs';
import { NavigationProps, NavigationChildProps } from '@src/configs/types';

import { ReactComponent as IconArrow } from '@src/assets/images/arrow.svg';

const StyledArrowIcon = styled(Icon)`
	color: ${(styleProps) => styleProps.theme.grey1};
`;

const StyledMobileMenu = styled(Menu)`
	padding: 25px 24px;
	border-right-width: 0;

	& > .ant-menu-submenu {
		border-bottom: 1px solid ${(styleProps) => styleProps.theme.borderColorSplit};
		.ant-menu-submenu-title {
			height: 48px;
			line-height: 48px;
			margin: 0;

			.ant-menu-title-content {
				font-family: ${(styleProps) => styleProps.theme.fontFamilyMedium};
			}

			.anticon {
				& svg {
					transform: rotate(90deg);
				}
			}
		}

		&.ant-menu-submenu-open {
			color: ${(styleProps) => styleProps.theme.primaryColor};
			.ant-menu-submenu-title {
				.anticon {
					color: ${(styleProps) => styleProps.theme.primaryColor};
					& svg {
						transform: rotate(-90deg);
					}
				}
			}
			.ant-menu-sub {
				background: ${(styleProps) => styleProps.theme.white};
				margin-bottom: 9px;
				.ant-menu-item {
					margin: 0;
					font-size: 14px;

					&.ant-menu-item-selected {
						&::after {
							display: none;
						}
					}
				}
			}
		}
	}
`;

const StyledWebMenu = styled(Row)`
	padding: 60px 24px 39px;
	max-width: ${(styleProps) => styleProps.theme.maxWidth};
	margin: 0 auto;

	.ant-typography {
		margin-bottom: 11px;
		font-family: ${(styleProps) => styleProps.theme.fontFamilyTitle};
		color: ${(styleProps) => styleProps.theme.textColor};
		line-height: 26px;
	}

	ul {
		padding: 0;
		margin: 0;
		list-style: none;

		li {
			margin-bottom: 10px;

			&:last-child {
				margin-bottom: 0;
			}

			a {
				display: inline-block;
				line-height: 24px;
				color: ${(styleProps) => styleProps.theme.textColor};
				font-size: ${(styleProps) => styleProps.theme.fontSizeSm};

				&:hover,
				&.active {
					text-decoration: underline;
				}
			}
		}
	}
`;

const Item = (props: NavigationChildProps & { path: string }): ReactElement => {
	const { path, linkTo, title } = props;
	const resolved = useResolvedPath(path);
	const match = useMatch({ path: resolved.pathname, end: true });

	if (linkTo) {
		return (
			<a href={linkTo} target="_blank" rel="noreferrer" style={{ display: 'block' }}>
				{title}
			</a>
		);
	}
	return (
		<NavLink to={path} className={({ isActive }) => (isActive && match ? 'active' : '')}>
			{title}
		</NavLink>
	);
};

export default function SiteMap(): ReactElement {
	const [openKeys, setOpenKeys] = useState<string[]>([]);
	const isMobile = useResponse();

	const menus: NavigationProps[] = useMemo(() => {
		return values.navigations;
	}, []);

	if (isMobile) {
		return (
			<StyledMobileMenu
				mode="inline"
				openKeys={openKeys}
				expandIcon={<StyledArrowIcon component={IconArrow} />}
				inlineIndent={0}
				onOpenChange={(keys) => {
					setOpenKeys((state) => {
						const latestOpenKey = keys.find((key) => state.indexOf(key) === -1);
						return latestOpenKey ? [latestOpenKey] : [];
					});
				}}
				forceSubMenuRender
			>
				{menus.map((menu: NavigationProps) => {
					return (
						<Menu.SubMenu key={menu.key} title={menu.title} popupOffset={[0, 0]}>
							{menu.children.map((child: NavigationChildProps) => {
								return (
									<Menu.Item key={child.key}>
										<Item {...child} path={child.key} />
									</Menu.Item>
								);
							})}
						</Menu.SubMenu>
					);
				})}
			</StyledMobileMenu>
		);
	}

	return (
		<StyledWebMenu justify="start" align="top">
			{menus.map((menu) => {
				return (
					<Col key={menu.key} span={Math.trunc(24 / menus.length)}>
						<Typography.Title level={5}>{menu.title}</Typography.Title>
						<ul>
							{menu.children.map((child: NavigationChildProps) => {
								return (
									<li key={child.key}>
										<Item {...child} path={child.key} />
									</li>
								);
							})}
						</ul>
					</Col>
				);
			})}
		</StyledWebMenu>
	);
}
