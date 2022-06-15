// import dependency modules : package.json에 명시된 외부모듈을 선언하세요.
import { Row, Col, Image, Form, Input, Button, Modal } from 'antd';

import { db } from '@src/firebaseConfig'
import styled from 'styled-components';
import logo from "@src/assets/images/logo.png"
import name from "@src/assets/images/name.png"
import number from "@src/assets/images/number.png"
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, addDoc, query, where } from 'firebase/firestore/lite';


export default function Home() {
	const navigate = useNavigate()
	const [form] = Form.useForm()

	const getFindResult = (querySnapshot: any) => {
		let result: any[] = []
		querySnapshot.forEach((doc: any) => {
			result.push(doc.id)
		});
		return result
	}


	const onSubmit = async () => {
		try {
			const result = await form.validateFields()
			const userRef = collection(db, "users");
			const { name, number } = result

			const q = query(userRef, where("name", "==", name), where("number", "==", number))
			const querySnapshot = await getDocs(q);
			const findResult = getFindResult(querySnapshot)

			console.log("findResult", findResult)
			if (findResult.length === 0) {
				const usersAddRef = await addDoc(collection(db, "users"), {
					name, number, problemNumber: 1
				});
				window.localStorage.setItem("userId", usersAddRef.id)
			} else {
				const currentUserRef = findResult[0]
				window.localStorage.setItem("userId", currentUserRef)
			}
			navigate("/before-start")
		}
		catch (error) {
			Modal.error({ content: "에러가 발생했습니다." })
		}

	}

	return (
		<HomeRow>
			<HomeCol span={24}>
				<Image preview={false} src={logo} ></Image>
				<Form form={form} style={{ width: "100%" }}>
					<Image preview={false} src={name}></Image>
					<Form.Item name={"name"} rules={[{ required: true }]}>
						<Input ></Input>
					</Form.Item>
					<Image preview={false} src={number}></Image>
					<Form.Item name={"number"} rules={[{ required: true }]}>
						<Input ></Input>
					</Form.Item>
				</Form>
				<Button block={true} onClick={onSubmit}>등록하기</Button>
			</HomeCol>
		</HomeRow>
	);
}

// 함수로 작성한 styled component를 선언하세요.
const HomeRow = styled(Row)(({ theme }) => {
	return {
		height: "100%"
	};
});

const HomeCol = styled(Col)(({ theme }) => {
	return {
		"&&": {
			display: "flex",
			padding: 30,
			height: "100%",
			justifyContent: "space-around",
			flexDirection: "column",
			alignItems: "center"
		}
	};
});
