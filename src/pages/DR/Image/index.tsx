// import dependency modules : package.json에 명시된 외부모듈을 선언하세요.
import { Image as AntImage } from 'antd';
import styled from 'styled-components';

// import global modules : 서비스 전역에서 사용중인 모듈을 선언하세요.
import { useResponse } from '@src/context/response';

// import local modules : 지역(route)에서 사용중인 모듈을 선언하세요.
import { ContentItem } from '../configs';

export default function Image(props: { articles: ContentItem['articles'] }) {
	const isMobile = useResponse();
	const { articles } = props;

	return (
		<>
			{articles?.map((article, idx) => {
				const { images, styles } = article;
				return <AntImage key={idx} src={isMobile ? images?.mobile : images.web} preview={false} style={isMobile ? styles?.mobile : styles?.web} />;
			})}
		</>
	);
}
