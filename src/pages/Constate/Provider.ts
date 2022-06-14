import { useState, useCallback } from 'react';
import constate from 'constate';

// state의 type을 지정해주세요.
type CounterProps = number;

function useConstate() {
	// counter 예제입니다.
	const [count, setCount] = useState<CounterProps>(0);

	const increment = useCallback(() => {
		setCount((state) => state + 1);
	}, []);

	const decrement = useCallback(() => {
		setCount((state) => state - 1);
	}, []);

	return { count, increment, decrement, setCount };
}

const [Provider, useCount, useConstateIncrement, useConstateDecrement, useSetConstate] = constate(
	// 선언한 custom hook을 주입하세요.
	useConstate,
	// custom hook에서 반환한 값을 selector로 지정하세요.
	// custom hook의 API로 사용될 수 있게 각각의 selector를 기술해주세요.
	(value) => value.count, // 현재 count 값 읽기
	(value) => value.increment, // count 값 증가
	(value) => value.decrement, // count 값 감소
	(value) => value.setCount // count 설정
);

export { Provider, useCount, useConstateIncrement, useConstateDecrement, useSetConstate };
