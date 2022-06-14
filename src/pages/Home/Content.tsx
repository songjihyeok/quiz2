import { ReactElement } from 'react';
import { Button } from 'antd';

import { useRefetch, useParameters } from './Provider';

export default function Content(): ReactElement {
	const parameters = useParameters();
	const refetch = useRefetch();

	return (
		<div>
			Content dsd dsds
			<Button onClick={() => refetch({ ...parameters, page: parameters.page + 1 })}>ddd</Button>
		</div>
	);
}
