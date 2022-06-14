import { ReactElement } from 'react';
import { Button } from 'antd';
import { useRefetch } from './Provider';

export default function Sider(): ReactElement {
	const refetch = useRefetch();

	return (
		<div>
			<Button type="primary" onClick={() => refetch({ category: 'insight', page: 1, size: 8 })} />
			Sider
		</div>
	);
}
