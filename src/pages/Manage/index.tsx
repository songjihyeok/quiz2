// import dependency modules : package.json에 명시된 외부모듈을 선언하세요.
import { Row, Col } from 'antd';
import styled from 'styled-components';

// import global modules : 서비스 전역에서 사용중인 모듈을 선언하세요.

// import local modules : 지역(route)에서 사용중인 모듈을 선언하세요.

export default function Manage() {
	return (
		<ManageRow>
			<ManageCol>Manage</ManageCol>
		</ManageRow>
	);
}

// 함수로 작성한 styled component를 선언하세요.
const ManageRow = styled(Row)(({ theme }) => {
	return {};
});

const ManageCol = styled(Col)(({ theme }) => {
	return {};
});
