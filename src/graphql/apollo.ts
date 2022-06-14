import { ApolloClient, ApolloLink, InMemoryCache, createHttpLink } from '@apollo/client';
import { RestLink } from 'apollo-link-rest';

const endPoints = {
	king: 'https://king-api.solarconnect.kr/graphql',
	connect: 'https://connect-api.solarconnect.kr/api/v1/',
};

const httpLink = createHttpLink({ uri: `${endPoints.king}` });

const restLink = new RestLink({
	headers: {
		'Content-type': 'application/json',
	},
	credentials: 'omit',
	uri: `${endPoints.king}`,
	endpoints: {
		v1: {
			uri: `${endPoints.connect}`,
			responseTransformer: async (response) => response.json().then((data: ResponseType) => ({ data })),
		},
		// v3: {
		// 	uri: `https:${endPoint}`,
		// 	responseTransformer: async response => response.json().then(data => ({ data })),
		// },
	},
});

const client = new ApolloClient({
	connectToDevTools: process.env.REACT_APP_ENV !== 'production',
	link: ApolloLink.from([restLink, httpLink]),
	cache: new InMemoryCache().restore({}),
	defaultOptions: {
		watchQuery: {
			fetchPolicy: 'no-cache',
			errorPolicy: 'ignore',
		},
		query: {
			fetchPolicy: 'no-cache',
			errorPolicy: 'all',
		},
	},
});

export default client;
