// import dependency modules : package.json에 명시된 외부모듈을 선언하세요.
import { Row, Col ,Image,Form,Input, Typography, Button} from 'antd';
import styled from 'styled-components';
import logo from "@src/assets/images/logo.png"

const {Title } = Typography
export default function Home() {

	return (
		<HomeRow>
			<HomeCol span={24}>
				<Image preview={false} src={logo} style={{marginTop: 30}}></Image>
				<Form>
					<Title level={3}>이름</Title>
					<Form.Item name={"name"}>
						<Input ></Input>
					</Form.Item>
					<Title level={3}>사번</Title>
					<Form.Item name={"number"} >
						<Input ></Input>
					</Form.Item>
				</Form>
				<Button>등록하기</Button>
			</HomeCol>
		</HomeRow>
	);
}

// 함수로 작성한 styled component를 선언하세요.
const HomeRow = styled(Row)(({ theme }) => {
	return {};
});

const HomeCol = styled(Col)(({ theme }) => {
	return {
	
	};
});
