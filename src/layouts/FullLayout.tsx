import { ReactElement } from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

import { Header } from './header';

// home page의 전면 layout
export default function FullLayout(): ReactElement {
	return (
		<Layout>
			<Layout.Content>
				<Header />
				<Outlet />
			</Layout.Content>
		</Layout>
	);
}
