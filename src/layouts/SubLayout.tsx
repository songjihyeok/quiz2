import { ReactElement } from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

import { Header } from './header';
import { Visual } from './visual';

// subpage layout
export default function SubLayout(): ReactElement {
	return (
		<Layout>
			<Header />
			<Layout.Content>
				<Visual />
				<Outlet />
			</Layout.Content>
		</Layout>
	);
}
