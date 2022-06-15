// import dependency modules : package.json에 명시된 외부모듈을 선언하세요.
import { Row, Col, Image, Typography, Space, Button } from 'antd';
import styled from 'styled-components';
import logo from "@src/assets/images/logo.png"
import { useState, useEffect } from "react"
import { db } from '@src/firebaseConfig'
import { doc, getDoc } from 'firebase/firestore/lite';
import { useNavigate, useParams } from 'react-router-dom';
import type { RadioChangeEvent } from 'antd';
import ButtonWapper from "@src/assets/images/buttonCover.png"
import { setDoc, updateDoc, addDoc, query, where } from 'firebase/firestore/lite';
import dayjs from "dayjs"

import { Radio } from 'antd';

const { Title, Text } = Typography

export default function Problem() {
  const navigate = useNavigate()
  const { id: localProblemNumber } = useParams()
  const [problem, setProblem] = useState("")
  const [options, setOptions] = useState([])
  const [selected, setSelected] = useState(1)
  const [isLast, setIsLast] = useState(false)
  const [fontSize, setFontSize] = useState(15)
  const onChange = (e: RadioChangeEvent) => {
    setSelected(e.target.value)
  }

  const onSubmit = async () => {
    const userId = window.localStorage.getItem("userId")

    if (userId && localProblemNumber) {
      const userDocRef = doc(db, "users", userId);
      await updateDoc(userDocRef, {
        problemNumber: isLast ? Number(localProblemNumber) : Number(localProblemNumber) + 1,
      })
      const userSnap = await getDoc(userDocRef);
      if (userSnap.exists()) {
        const { name, number } = userSnap.data()
        const userProblemDocRef = doc(db, "problem", localProblemNumber, "user", userId);

        await setDoc(userProblemDocRef, {
          id: userId,
          name,
          number,
          selected,
          createdTime: dayjs().format("YYYY-MM-DD-HH:mm:ss")
        })

        if (!isLast) {
          navigate("/before-start")
        } else {
          navigate("/finish")
        }
      }


    }
  }


  useEffect(() => {
    const getProblemData = async () => {

      if (localProblemNumber) {
        const problemRef = doc(db, "problem", localProblemNumber.toString());
        const docSnap = await getDoc(problemRef);
        if (docSnap.exists()) {
          const currentProblemData = docSnap.data()
          const { problem, options, isLast, fontSize } = currentProblemData
          if (problem && options) {
            setFontSize(fontSize)
            setProblem(problem)
            setOptions(options)
            setIsLast(isLast)
          }
        }
      }
    }
    getProblemData()
  }, [])

  return (
    <ProblemRow>
      <StyledImage src={logo} preview={false} />
      <ProblemCol span={24}>
        <ProblemWrapper>
          <Title level={2}>{problem}</Title>
          <StyledRadioGroup onChange={onChange} value={selected} >
            <Space direction="vertical" style={{ width: "100%" }}>
              {options.map((option, index) => {
                return <Radio value={index + 1} key={index} style={{ height: 40, display: "flex", alignItems: "center", width: "100%" }}><Text style={{ fontSize: fontSize }}>{option}</Text></Radio>
              })}
            </Space>
          </StyledRadioGroup>
        </ProblemWrapper>
        <SubmitButton block onClick={onSubmit}>제출하기</SubmitButton>
      </ProblemCol>

    </ProblemRow>
  );
}

const SubmitButton = styled(Button)(({ theme }) => {
  return {
    marginTop: 30
  }
})

const StyledRadioGroup = styled(Radio.Group)(({ theme }) => {
  return {
    "&&": {
      width: "100%",
      marginTop: 30,
    },
    "&& .ant-radio ": {
      display: "none"
    },
    "&& .ant-radio-wrapper-checked": {
      // border: "1px solid black"
      // backgroundImage: 
      backgroundImage: `url(${ButtonWapper})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%"
    }
  }
})

const ProblemCol = styled(Col)(({ theme }) => {
  return {
    "&&": {
      padding: "0 30px",
      display: "flex",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      position: "relative"
    }
  }
});

const ProblemRow = styled(Row)(({ theme }) => {
  return {
    height: "100%",
    position: "relative"
  };
});

const ProblemWrapper = styled.div(({ theme }) => {
  return {
    backgroundColor: "RGB(255, 255, 255, 0.5)",
    padding: 30,
    minHeight: 400,
    height: "auto",
    width: "100%"
  }
})


const StyledImage = styled(Image)(({ theme }) => {
  return {
    "&&": {
      position: "absolute",
      top: 15,
      width: 250,
    }
  }
})

