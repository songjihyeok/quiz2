// import dependency modules : package.json에 명시된 외부모듈을 선언하세요.
import { Row, Col, Button } from 'antd';

// import global modules : 서비스 전역에서 사용중인 모듈을 선언하세요.

// import local modules : 지역(route)에서 사용중인 모듈을 선언하세요.

export default function Claim() {
	return (
		<Row justify="center">
			<Col>
				<Button type="primary">수요자원거래시장 문의하기</Button>
			</Col>
		</Row>
	);
}
