// import dependency modules : package.json에 명시된 외부모듈을 선언하세요.
import { Row, Col, Typography, Image, Modal } from 'antd';
import { useEffect, useState } from "react"
import styled from 'styled-components';
import Join from "@src/assets/images/join.png"
import { useNavigate } from 'react-router-dom';
import { db } from '@src/firebaseConfig'
import { doc, getDoc } from 'firebase/firestore/lite';
const { Title } = Typography

export default function BeforeStart() {
  const [localProblemNumber, setLocalProblemNumber] = useState(1);
  const navigate = useNavigate()
  const currentUser = window.localStorage.getItem("userId")
  const onClickJoin = async () => {
    const valid = await checkProblemPossible()
    if (!valid) {
      navigate("/before-open")
    } else {
      navigate(`/problem/${localProblemNumber}`)
    }
  }

  const checkProblemPossible = async () => {
    const problemRef = doc(db, "problem", localProblemNumber.toString());
    const docSnap = await getDoc(problemRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      const currentProblemData = docSnap.data()
      const { valid } = currentProblemData
      return valid
    } else {
      Modal.error({ content: "아이디 정보가 없습니다." })
      navigate("/")
    }
  }
  useEffect(() => {

    const getCurrentUserData = async () => {

      if (!currentUser) {
        Modal.error({ content: "아이디 정보가 없습니다." })
        navigate("/")
      } else {
        const userRef = doc(db, "users", currentUser);
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          const currentUserData = docSnap.data()
          const { problemNumber } = currentUserData
          if (!problemNumber) {
            Modal.error({ content: "아이디 정보가 없습니다." })
            navigate("/")
          } else {
            setLocalProblemNumber(problemNumber)
          }
        } else {
          Modal.error({ content: "아이디 정보가 없습니다." })
          navigate("/")
        }
      }
    }
    getCurrentUserData()
  }, [])




  return (
    <BeforeStartRow>
      <BeforeStartCol span={24}>
        <Title>버튼을 눌러서</Title>
        <Title>문제풀이에 참여해주세요</Title>

        <Image src={Join} preview={false} onClick={onClickJoin}></Image>
      </BeforeStartCol>
    </BeforeStartRow>
  );
}

// 함수로 작성한 styled component를 선언하세요.
const BeforeStartRow = styled(Row)(({ theme }) => {
  return {
    height: "100%"
  };
});

const BeforeStartCol = styled(Col)(({ theme }) => {
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

