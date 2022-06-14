import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';

// custom provider
import { Provider as ResponseProvider } from '@src/context/response';

// locale
import koKR from 'antd/lib/locale/ko_KR';

// theme 설정 : scss variable로 작성한 scss파일을 antd 초기화에 사용하고 styled-components의 theme로 사용
// 각 styled component에서는 prop.theme로 scss varialble을 접근할 수 있다.
import theme from '!!sass-variable-parser!./styles/variables.scss';
import '@src/styles/root.scss';

import { client as apolloClient } from './graphql';
import App from '@src/App';

ReactDOM.render(
	<StrictMode>
		<ConfigProvider locale={koKR} virtual getPopupContainer={(node) => (node ? (node.parentNode as HTMLElement) : document.body)}>
			<ApolloProvider client={apolloClient}>
				<ThemeProvider theme={{ ...theme, mobileMedia: `(max-width: ${theme.mobile})`, headerMedia: `(max-width: ${theme.responseHeader})` }}>
					<ResponseProvider>
						<BrowserRouter>
							<App />
						</BrowserRouter>
					</ResponseProvider>
				</ThemeProvider>
			</ApolloProvider>
		</ConfigProvider>
	</StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
