import { ReactElement } from 'react';

import { Provider } from './Provider';
import Content from './Content';
import Sider from './Sider';

function Container(): ReactElement {
	return (
		<Provider>
			<Sider />
			<Content />
		</Provider>
	);
}

export default Container;
