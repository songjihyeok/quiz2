import { ReactElement } from 'react';
import { Layout, Row, Col } from 'antd';
import { Outlet } from 'react-router-dom';
import styled from "styled-components"
import background from "@src/assets/images/background.jpg"

// home page의 전면 layout
export default function FullLayout(): ReactElement {
	return (
		<Layout>
			<Layout.Content>
				<Row>
					<MobileCol span={24}>
						<Outlet />
					</MobileCol>
				</Row>
			</Layout.Content>
		</Layout>
	);
}

const MobileCol = styled(Col)(({ theme }) => {
	return {
		"&&": {
			maxWidth: 400,
			margin: "0 auto",
			background: `url(${require('@src/assets/images/background.jpg')})`,
			backgroundRepeat: 'no-repeat',
		}
	}
})
