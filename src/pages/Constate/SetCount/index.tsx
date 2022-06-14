/* eslint-disable @typescript-eslint/no-unused-vars */
// import dependency modules : package.json에 명시된 외부모듈을 선언하세요.
import { Button } from 'antd';
import styled from 'styled-components';

// import global modules : 서비스 전역에서 사용중인 모듈을 선언하세요.

// import local modules : 지역(route)에서 사용중인 모듈을 선언하세요.
import { useSetConstate } from '../Provider';

export default function SetCount() {
	const setcount = useSetConstate();

	return (
		<SetCountButton type="dashed" onClick={() => setcount(6)}>
			SetCount
		</SetCountButton>
	);
}

// 함수로 작성한 styled component를 선언하세요.
const SetCountButton = styled(Button)(({ theme }) => {
	return {};
});
