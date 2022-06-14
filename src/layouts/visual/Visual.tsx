import { ReactElement } from 'react';
import { Row, Col } from 'antd';
import { useLocation } from 'react-router-dom';

import { Title, Banner } from './components';
export interface IVisualProps {
	path: string;
}

export default function Visual(): ReactElement {
	const location = useLocation();
	const { pathname } = location;

	const currentPath = pathname.split('/')[1];

	return (
		<Row>
			<Col span={24}>
				<Title path={currentPath} />
			</Col>
			<Col span={24}>
				<Banner path={currentPath} />
			</Col>
		</Row>
	);
}
