/* eslint-disable @typescript-eslint/no-unused-vars */
// import dependency modules : package.json에 명시된 외부모듈을 선언하세요.
import { Row, Col } from 'antd';
import styled from 'styled-components';

// import global modules : 서비스 전역에서 사용중인 모듈을 선언하세요.

// import local modules : 지역(route)에서 사용중인 모듈을 선언하세요.s
import { Provider } from './Provider';
import Count from './Count';
import Decrement from './Decrement';
import Increment from './Increment';
import OtherChild from './OtherChild';
import SetCount from './SetCount';

export default function Constate() {
	return (
		<Provider>
			<ConstateRow>
				<ConstateCol>
					<Count />
					<Decrement />
					<Increment />
					<OtherChild />
					<SetCount />
				</ConstateCol>
			</ConstateRow>
		</Provider>
	);
}

// 함수로 작성한 styled component를 선언하세요.
const ConstateRow = styled(Row)(({ theme }) => {
	return {};
});

const ConstateCol = styled(Col)(({ theme }) => {
	return {};
});
