import { ReactElement } from 'react';
import { Menu, Typography } from 'antd';
import styled from 'styled-components';
import { useLocation, useResolvedPath, useMatch, NavLink, Link } from 'react-router-dom';

import { service } from '@src/configs';

import { MenuProps, MenuChildProps } from '../configs/types';
import { useWidth, useMenu } from '../Provider';

interface SubMenuProps {
	readonly ['data-margin']: number;
}

const StyledMenu = styled(Menu)<SubMenuProps>`
	&.ant-menu-horizontal {
		border-bottom: none;

		& > .ant-menu-submenu {
			margin-top: 0;
			top: 0;

			&:first-child {
				padding-left: 0;
				padding-right: 20px;
			}

			&:nth-last-child(2) {
				margin-left: 40px;

				&:before {
					content: '';
					position: absolute;
					left: -20px;
					top: 50%;
					width: 1px;
					height: 18px;
					background-color: ${(styleProps) => styleProps.theme.darkGrey3};
					transform: translateY(-50%);
				}
			}

			&:after {
				display: none;
			}

			// menu-title
			& > .ant-menu-submenu-title {
				font-size: 17px;
				font-family: ${(styleProps) => styleProps.theme.fontFamilyTitle};
			}

			// sub-menu
			& .global-menu-sub {
				left: 0;
				right: 0;
				width: 100vw;
				background-color: ${(styleProps) => styleProps.theme.white};
				box-shadow: 0px 9px 9px 2px rgba(0, 0, 0, 0.07);

				&.ant-menu-submenu-hidden {
					left: auto;
					right: auto;
				}

				& > .ant-menu {
					max-width: 684px;
					box-shadow: none;
					display: flex;
					flex-flow: row wrap;
					padding: 16px 24px 40px 0;
					min-height: 125px;
					box-sizing: content-box;
					width: calc(80vw - (${(styleProps) => styleProps['data-margin'] + 24}px + 48px));
					margin-left: calc((100vw - ${(styleProps) => styleProps.theme.maxWidth}) / 2 + ${(styleProps) => styleProps['data-margin'] + 24}px);

					@media ${(styleProps) => styleProps.theme.headerMedia} {
						margin-left: ${(styleProps) => styleProps['data-margin'] + 24}px;
					}

					& > .ant-menu-item {
						flex: 1 1 50%;
						height: auto;
						margin: 32px 0 0 0;
						line-height: normal;
						padding: 0;
						max-width: 342px;

						&:nth-child(1),
						&:nth-child(2) {
							margin: 0;
						}

						.ant-menu-title-content {
							.ant-typography {
								h5.ant-typography {
									margin-bottom: 2px;
									letter-spacing: -0.6px;
									font-family: ${(styleProps) => styleProps.theme.fontFamilyMedium};
								}
								span.ant-typography {
									color: ${(styleProps) => styleProps.theme.grey2};
									line-height: 24px;
									letter-spacing: -0.05em;
									font-size: ${(styleProps) => styleProps.theme.fontSizeSm};
								}
							}

							// active
							.active {
								h5.ant-typography {
									text-decoration: underline;
								}
							}
						}

						// active
						&.ant-menu-item-active {
							.ant-menu-title-content {
								h5.ant-typography {
									text-decoration: underline;
								}
							}
						}

						// off selected
						&.ant-menu-item-selected {
							background-color: transparent;
						}

						&:active {
							background-color: transparent;
						}

						&.jump-menu {
							position: absolute;
							left: auto;
							top: 16px;
							max-width: 330px;
							padding: 0;
							margin: 0;
							height: auto;
							width: 22vw;
							right: calc((100vw - ${(styleProps) => styleProps.theme.maxWidth}) / 2 + 24px);

							@media ${(styleProps) => styleProps.theme.headerMedia} {
								right: 24px;
							}

							& img {
								width: 100%;
							}
						}
					}
				}
			}
		}
	}
`;

export default function Navigation(): ReactElement {
	const location = useLocation();
	const menus = useMenu();

	return (
		<StyledMenu mode="horizontal" data-margin={useWidth()} defaultSelectedKeys={[`${location.pathname.split('/')[1]}`]}>
			{menus.map((menu: MenuProps) => {
				const bannerImg = <img src={service.getValue(menu, 'banner.src.default')} alt={menu.title} />;

				return (
					<Menu.SubMenu key={menu.key} title={menu.title} popupOffset={[0, 0]} popupClassName="global-menu-sub">
						{menu.children.map(({ key, title, linkTo, attribute }: MenuChildProps) => {
							const resolved = useResolvedPath(key);
							const match = useMatch({ path: resolved.pathname, end: true });

							const link = (
								<Typography>
									<Typography.Title level={5}>{title}</Typography.Title>
									<Typography.Text>{service.getValue(attribute, 'description', '')}</Typography.Text>
								</Typography>
							);

							return (
								<Menu.Item key={key}>
									{linkTo ? (
										<a href={linkTo} target="_blank" rel="noreferrer" style={{ display: 'block' }}>
											{link}
										</a>
									) : (
										<NavLink to={key} className={({ isActive }) => (isActive && match ? 'active' : '')}>
											{link}
										</NavLink>
									)}
								</Menu.Item>
							);
						})}
						{menu.banner ? (
							<Menu.Item key={`${menu.key}-jump`} className="jump-menu">
								{service.getValue(menu, 'banner.linkTo').indexOf('https') !== -1 ? (
									<a href={service.getValue(menu, 'banner.linkTo')} target="_blank" rel="noreferrer">
										{bannerImg}
									</a>
								) : (
									<Link to={service.getValue(menu, 'banner.linkTo')}>{bannerImg}</Link>
								)}
							</Menu.Item>
						) : null}
					</Menu.SubMenu>
				);
			})}
		</StyledMenu>
	);
}
