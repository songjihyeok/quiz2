// import dependency modules : package.json에 명시된 외부모듈을 선언하세요.
import { Row, Col, Typography, Image } from 'antd';
import styled from 'styled-components';
import Goback from "@src/assets/images/goback.png"
import { useNavigate } from 'react-router-dom';

const { Title } = Typography


export default function BeforeOpen() {
  const navigate = useNavigate()

  const onClickGoBack = () => {
    navigate("/before-start")
  }

  return (
    <BeforeOpenRow>
      <BeforeOpenCol span={24}>
        <Title>문제가 아직</Title>
        <Title>오픈되지 않았습니다</Title>
        <Image src={Goback} preview={false} onClick={onClickGoBack}></Image>
      </BeforeOpenCol>
    </BeforeOpenRow>
  );
}

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

