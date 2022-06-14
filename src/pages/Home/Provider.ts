import { useState, useCallback } from 'react';
import { useQuery } from '@apollo/client';
import constate from 'constate';

import ListQuery from '@src/graphql/queries/home/List.graphql';
export interface PostArgumentsProps {
	category: string;
	size: number;
	page: number;
}

const initialParameters: PostArgumentsProps = {
	category: 'insight',
	size: 8,
	page: 1,
};

function useFetchQuery() {
	const [parameters, setParameters] = useState<PostArgumentsProps>(initialParameters);

	const { data, loading } = useQuery(ListQuery, {
		skip: !Object.keys(parameters).length,
		variables: {
			...parameters,
		},
	});

	const refetch = useCallback((params: PostArgumentsProps) => {
		if (Object.keys(params).length) {
			setParameters(params);
		} else {
			setParameters(initialParameters);
		}
	}, []);

	console.log('data', data);
	console.log('loading', loading);

	return { data, loading, parameters, refetch };
}

const [Provider, useData, useLoading, useParameters, useRefetch] = constate(
	useFetchQuery,
	(value) => value.data, // fetched data
	(value) => value.loading, // apollo client loading 상태
	(value) => value.parameters, // query variables
	(value) => value.refetch // parameter 값을 변경하여 data를 다시 받습니다.
);

export { Provider, useData, useLoading, useParameters, useRefetch };
