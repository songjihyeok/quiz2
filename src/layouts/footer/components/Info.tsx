import { ReactElement } from 'react';
import { Row, Col, Typography, Space, Divider } from 'antd';
import Icon from '@ant-design/icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as ImgBlog } from '@src/assets/images/sns/blog.svg';
import { ReactComponent as ImgFacebook } from '@src/assets/images/sns/facebook.svg';
import { ReactComponent as ImgKakao } from '@src/assets/images/sns/kakao.svg';
import { ReactComponent as ImgYoutube } from '@src/assets/images/sns/youtube.svg';

import { Logo } from '@src/components';

import { values } from '@src/configs';

const StyledRow = styled(Row)`
	padding: 62px 24px 61px;
	max-width: ${(styleProps) => styleProps.theme.maxWidth};
	margin: 0 auto;

	@media ${(styleProps) => styleProps.theme.mobileMedia} {
		padding: 34px 25px 55px;
	}
`;

const StyledInfo = styled(Col)`
	.ant-typography {
		color: ${(styleProps) => styleProps.theme.grey2};
		font-size: ${(styleProps) => styleProps.theme.fontSizeSm};

		&:hover {
			color: ${(styleProps) => styleProps.theme.grey2};
		}
	}

	// Paragraph
	div {
		&.ant-typography {
			margin-bottom: 0;
		}
	}

	// Text
	span {
		&.ant-typography {
			margin-right: 10px;
		}
	}

	// Link

	// jump menu
	.ant-space {
		a {
			color: ${(styleProps) => styleProps.theme.grey2};
			font-size: ${(styleProps) => styleProps.theme.fontSizeSm};
		}
		.ant-space-item:last-child {
			a {
				color: ${(styleProps) => styleProps.theme.textColor};
			}
		}
	}

	@media ${(styleProps) => styleProps.theme.mobileMedia} {
		margin-bottom: 35px;

		// Paragraph
		div {
			&.ant-typography {
				span.ant-typography {
					display: block;
				}
			}
		}
	}
`;

const StyledCS = styled(Col)`
	// Title
	h5 {
		&.ant-typography {
			font-family: ${(styleProps) => styleProps.theme.fontFamilyTitle};
			color: ${(styleProps) => styleProps.theme.textColor};
			line-height: 26px;
			margin-bottom: 2px;
		}
	}

	a {
		&.ant-typography {
			font-family: ${(styleProps) => styleProps.theme.fontFamilyTitle};
			color: ${(styleProps) => styleProps.theme.textColor};
			font-size: 32px;
			letter-spacing: -0.03em;
			display: block;
			line-height: 41px;
			margin-bottom: 2px;
		}
	}

	span {
		&.ant-typography {
			font-size: ${(styleProps) => styleProps.theme.fontSizeSm};
		}
	}

	.ant-space {
		.ant-btn {
			.anticon {
				font-size: 28px;
			}
		}
	}

	@media ${(styleProps) => styleProps.theme.mobileMedia} {
		margin-bottom: 35px;

		a {
			&.ant-typography {
				font-size: ${(styleProps) => styleProps.theme.heading2Size};
				line-height: 36px;
			}
		}
	}
`;

export default function Info(): ReactElement {
	const { company } = values;

	return (
		<StyledRow justify="space-between" align="top">
			<StyledInfo span={24} lg={16}>
				<Typography>
					<Logo style={{ fontSize: 170, color: '#1d1e1f', marginBottom: 19, verticalAlign: 'top' }} svgStyle={{ height: 28, verticalAlign: 'middle' }} />
					<Typography.Paragraph>
						<Typography.Text>{`${company.name}(주)`}</Typography.Text>
						<Typography.Text>{company.address}</Typography.Text>
						<Typography.Text>{`대표이사 : ${company.ceo}`}</Typography.Text>
					</Typography.Paragraph>
					<Typography.Paragraph>
						<Typography.Text>{`통신판매업신고번호 : ${company.businessReportNumber}`}</Typography.Text>
						<Typography.Text>
							{`사업자등록번호 : ${company.registrationNumber}`}
							<Typography.Link target="_blank" href='https://www.ftc.go.kr/bizCommPop.do?wrkr_no=8848800541"' style={{ marginLeft: 8, textDecoration: 'underline' }}>
								사업자정보확인
							</Typography.Link>
						</Typography.Text>
					</Typography.Paragraph>
					<Typography.Paragraph style={{ marginTop: 6, marginBottom: 11 }}>
						<Typography.Text>{`Copyright © ${company.nameEn}, Inc. All rights reserved.`}</Typography.Text>
					</Typography.Paragraph>
				</Typography>
				<Space split={<Divider type="vertical" />}>
					<Link to="/notice">공지사항</Link>
					<Link to="/utilization">서비스이용약관</Link>
					<Link to="/entrustment">개인정보처리방침</Link>
				</Space>
			</StyledInfo>
			<StyledCS span={24} lg={{ span: 6, pull: 2 }}>
				<Typography style={{ marginBottom: 14 }}>
					<Typography.Title level={5}>고객센터</Typography.Title>
					<Typography.Link href={`tel:${company.cs.contract}`}>{company.cs.contract}</Typography.Link>
					<Typography.Text>{company.cs.operatingTime}</Typography.Text>
				</Typography>

				<Space align="baseline" size={24}>
					<Typography.Link href="https://blog.naver.com/solarconnect" target="_blank">
						<Icon component={ImgBlog} />
					</Typography.Link>
					<Typography.Link href="https://www.youtube.com/channel/UCIfan7LaNaOvrYcGgr3kn1A" target="_blank">
						<Icon component={ImgYoutube} />
					</Typography.Link>
					<Typography.Link href="http://pf.kakao.com/_FcxnBxl" target="_blank">
						<Icon component={ImgKakao} />
					</Typography.Link>
					<Typography.Link href="https://www.facebook.com/solarconnect.kr" target="_blank">
						<Icon component={ImgFacebook} />
					</Typography.Link>
				</Space>
			</StyledCS>
		</StyledRow>
	);
}
