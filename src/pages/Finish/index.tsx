// import dependency modules : package.json에 명시된 외부모듈을 선언하세요.
import { Row, Col, Typography, Image, Modal } from 'antd';
import { useEffect, useState } from "react"
import styled from 'styled-components';
import Join from "@src/assets/images/join.png"
import { useNavigate } from 'react-router-dom';
import { db } from '@src/firebaseConfig'
import { doc, getDoc } from 'firebase/firestore/lite';
const { Title } = Typography


export default function Finish() {

  return (
    <FinsihRow>
      <FinishCol span={24}>
        <ProblemWrapper>
          <Title>모든문제가</Title>
          <Title>접수되었습니다</Title>
          <Title>참여해 주셔서</Title>
          <Title>감사합니다</Title>
        </ProblemWrapper>
      </FinishCol>
    </FinsihRow>
  );
}
const ProblemWrapper = styled.div(({ theme }) => {
  return {
    "&&": {
      backgroundColor: "RGB(255, 255, 255, 0.5)",
      padding: 30,
      minHeight: 300,
      height: "auto",
      width: "100%"
    }
  }
})


// 함수로 작성한 styled component를 선언하세요.
const FinsihRow = styled(Row)(({ theme }) => {
  return {
    height: "100%"
  };
});

const FinishCol = styled(Col)(({ theme }) => {
  return {
    "&&": {
      display: "flex",
      height: "100%",
      padding: 30,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }
  }
})

