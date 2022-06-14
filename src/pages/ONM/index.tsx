import { Row } from 'antd';
import Top from './Top';
import Mowing from './Mowing';
import Diagnose from './Diagnose';
import SafetyManager from './SafetyManager';
import Event from './Event';
import Product from './Product';
import Report from './Report';

export default function Onm() {
	return (
		<Row justify="center">
			<Top />
			<Mowing />
			<Diagnose />
			<SafetyManager />
			<Report />
			<Event />
			<Product />
		</Row>
	);
}
