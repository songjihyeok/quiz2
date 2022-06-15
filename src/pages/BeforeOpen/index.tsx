// import dependency modules : package.json에 명시된 외부모듈을 선언하세요.
import { Row, Col, Typography, Image } from 'antd';
import styled from 'styled-components';
import Join from "@src/assets/images/join.png"

const { Title } = Typography


export default function BeforeOpen() {

  const onClickGoBack = () => {

  }

  return (
    <BeforeOpenRow>
      <BeforeOpenCol span={24}>
        <Title>버튼을 눌러서</Title>
        <Title>문제풀이에 참여해주세요</Title>

        <Image src={Join} preview={false} onClick={onClickGoBack}></Image>
      </BeforeOpenCol>
    </BeforeOpenRow>
  );
}

// 함수로 작성한 styled component를 선언하세요.
const BeforeOpenRow = styled(Row)(({ theme }) => {
  return {
    height: "100%"
  };
});

const BeforeOpenCol = styled(Col)(({ theme }) => {
  return {
    "&&": {
      display: "flex",
      height: "100%",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }
  }
})

