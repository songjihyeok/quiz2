import React from 'react';

// refs = https://reactrouter.com/docs/en/v6/getting-started/concepts#index-routes
const defaultRoutes = [
	{
		path: '/',
		element: React.createElement(React.lazy(() => import('@src/layouts/FullLayout'))),
		children: [
			{
				index: true,
				element: React.createElement(React.lazy(() => import('@root/src/pages/Home'))),
			},
			{
				path: "/before-start",
				element: React.createElement(React.lazy(() => import('@root/src/pages/BeforeStart'))),
			},
			{
				path: "/before-open",
				element: React.createElement(React.lazy(() => import('@root/src/pages/BeforeOpen'))),
			},
			// not found
			{
				path: '*',
				element: React.createElement(React.lazy(() => import('@src/pages/NotFound'))),
			},
		],
	},
];

export default defaultRoutes;
