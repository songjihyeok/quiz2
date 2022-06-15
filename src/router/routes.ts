import React from 'react';

// refs = https://reactrouter.com/docs/en/v6/getting-started/concepts#index-routes
const defaultRoutes = [
	{
		path: "/admin",
		element: React.createElement(React.lazy(() => import('@root/src/pages/Admin'))),
	},
	{
		path: "/dashboard",
		element: React.createElement(React.lazy(() => import('@root/src/pages/Admin/Dashboard'))),
		children: [
			{
				index: true,
				// path: "/dashboard/problems",
				element: React.createElement(React.lazy(() => import('@root/src/pages/Admin/Problem'))),
			},
			{
				path: "/dashboard/problem",
				element: React.createElement(React.lazy(() => import('@root/src/pages/Admin/Problem'))),
			},
			{
				path: "/dashboard/time",
				element: React.createElement(React.lazy(() => import('@root/src/pages/Admin/Times'))),
			},
		]
	},

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
			{
				path: "/finish",
				element: React.createElement(React.lazy(() => import('@root/src/pages/Finish'))),
			},
			{
				path: "/problem/:id",
				element: React.createElement(React.lazy(() => import('@root/src/pages/Problem'))),
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
