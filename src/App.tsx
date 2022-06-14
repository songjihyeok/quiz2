import React, { ReactElement } from 'react';
import { Layout } from 'antd';
import { Routes, Route } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

import { routes } from '@src/router';

function getRoutes(route: RouteObject): ReactElement {
	if (route.children) {
		return (
			<Route key={Math.random()} {...route} element={<React.Suspense fallback={<span>&nbsp;</span>}>{route.element}</React.Suspense>}>
				{route.children.map((child: RouteObject) => {
					return getRoutes(child);
				})}
			</Route>
		);
	}
	return <Route key={Math.random()} {...route} element={<React.Suspense fallback={<span>&nbsp;</span>}>{route.element}</React.Suspense>} />;
}

export default function App(): ReactElement {
	return (
		<Layout className="home-webapp">
			<Routes>
				{routes.map((route: RouteObject) => {
					return getRoutes(route);
				})}
			</Routes>
		</Layout>
	);
}
