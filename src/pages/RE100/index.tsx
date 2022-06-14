// import dependency modules : package.json에 명시된 외부모듈을 선언하세요.
import { Row, Col } from 'antd';
import styled from 'styled-components';

// import global modules : 서비스 전역에서 사용중인 모듈을 선언하세요.

// import local modules : 지역(route)에서 사용중인 모듈을 선언하세요.

export default function RE100() {
	return (
		<RE100Row>
			<RE100Col>RE100</RE100Col>
		</RE100Row>
	);
}

// 함수로 작성한 styled component를 선언하세요.
const RE100Row = styled(Row)(({ theme }) => {
	return {};
});

const RE100Col = styled(Col)(({ theme }) => {
	return {};
});
