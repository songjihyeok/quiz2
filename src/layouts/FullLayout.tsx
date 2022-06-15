import { ReactElement } from 'react';
import { Layout, Row, Col } from 'antd';
import { Outlet } from 'react-router-dom';
import styled from "styled-components"
import background from "@src/assets/images/background.jpg"

// home page의 전면 layout
export default function FullLayout(): ReactElement {
	return (
		<Layout>
			<Content>
				<Outlet />
			</Content>
		</Layout>
	);
}

const Content = styled(Layout.Content)(({ theme }) => {
	return {
		"&&": {
			height: "100vh",
			margin: "0 auto",
			minWidth: 450,
			background: `url(${background})`,
			backgroundRepeat: "no-repeat",
			backgroundSize: "100% 100%"
		}
	}
})

