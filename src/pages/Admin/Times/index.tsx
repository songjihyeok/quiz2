// import dependency modules : package.json에 명시된 외부모듈을 선언하세요.
import { Row, Col, Radio, Table, Button } from 'antd';
import styled from 'styled-components';
import { useState, useEffect } from "react"
import { doc, getDocs, getDoc, collection } from 'firebase/firestore/lite';
import { db } from '@src/firebaseConfig'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import dayjs from "dayjs"
import { CSVLink } from 'react-csv'
import { service } from '@src/configs'
dayjs.extend(customParseFormat)
export default function Times() {

  const [problem, setProblem] = useState("1")
  const [data, setData] = useState<any[]>([])
  const [allData, setAllData] = useState<any[]>([])
  const onChangeProblem = (e: any) => {
    setProblem(e.target.value)
  }

  const headers = [
    { label: "문제 넘버", key: "problemNumber" },
    { label: "사번", key: "number" },
    { label: "이름", key: "name" },
    { label: "시간", key: "createdTime" },
    { label: "선택한 번호", key: "selected" },
    { label: "문제 답", key: "answer" },
    { label: "정답여부", key: "isCorrect" },
  ];


  const columns = [
    {
      key: 'name',
      title: "이름",
      dataIndex: ['name'],
    },
    {
      key: 'number',
      title: '사번',
      dataIndex: ['number'],
    },
    {
      key: 'selected',
      title: '선택한 번호',
      dataIndex: ['selected'],
    },
    {
      key: 'answer',
      title: '문제 답',
      dataIndex: ['answer'],
    },
    {
      key: 'isCorrect',
      title: '정답여부',
      dataIndex: ['isCorrect'],
      render: (value: boolean) => {
        return <div>{value ? "맞음" : "틀림"}</div>
      }
    },
    {
      key: 'everage',
      title: '평균',
      dataIndex: ['everage']
    },
    {
      key: 'createdTime',
      title: '생성시간',
      dataIndex: ['createdTime'],
    },
  ]

  useEffect(() => {
    const getTimeData = async () => {
      const timeRef = collection(db, "problem", problem, "user")
      const problemRef = doc(db, "problem", problem);
      const querySnapshot = await getDocs(timeRef)
      const problemSnap = await getDoc(problemRef)
      const currentProblemData = problemSnap.data()
      const answer = service.getValue(currentProblemData, "answer", 0)

      let data: any[] = []
      querySnapshot.forEach((doc) => {
        const userData = doc.data()
        const userAnswer = userData.selected
        const correctCounts = service.getValue(userData, "correctCounts", 0)
        const everage = correctCounts / Number(problem)
        const isCorrect = userAnswer === answer
        const userObject = { ...userData, answer: answer, isCorrect, everage: everage.toFixed(3), problemNumber: problem }

        data.push(userObject)
      });

      const sortedData = data.sort((a, b) => {

        const AcreatedTime = dayjs(a.createdTime, "YYYY-MM-DD-HH:mm:ss")
        const BcreatedTime = dayjs(b.createdTime, "YYYY-MM-DD-HH:mm:ss")

        const isBefore = dayjs(AcreatedTime).isBefore(BcreatedTime)
        if (a.createdTime === b.createdTime) {
          return 0
        }

        if (isBefore) {
          return -1
        } else {
          return 1
        }
      })
      setData(sortedData)
    }
    getTimeData()
  }, [problem])


  useEffect(() => {
    const getTotalData = async () => {
      let allTotalData: any[] = []
      for (let i = 1; i < 16; i++) {

        const timeRef = collection(db, "problem", i.toString(), "user")
        const problemRef = doc(db, "problem", i.toString());
        const querySnapshot = await getDocs(timeRef)
        const problemSnap = await getDoc(problemRef)
        const currentProblemData = problemSnap.data()
        const answer = service.getValue(currentProblemData, "answer", 0)

        let data: any[] = []
        querySnapshot.forEach((doc) => {
          const userData = doc.data()
          const userAnswer = userData.selected
          const correctCounts = service.getValue(userData, "correctCounts", 0)
          const everage = correctCounts / i
          const isCorrect = userAnswer === answer
          const userObject = { ...userData, answer: answer, isCorrect, everage: everage.toFixed(3), problemNumber: i }

          data.push(userObject)
        });
        const sortedData = data.sort((a, b) => {

          const AcreatedTime = dayjs(a.createdTime, "YYYY-MM-DD-HH:mm:ss")
          const BcreatedTime = dayjs(b.createdTime, "YYYY-MM-DD-HH:mm:ss")

          const isBefore = dayjs(AcreatedTime).isBefore(BcreatedTime)
          if (a.createdTime === b.createdTime) {
            return 0
          }

          if (isBefore) {
            return -1
          } else {
            return 1
          }
        })
        // console.log("sorted", sortedData)
        allTotalData.push(...sortedData)
      }
      setAllData(allTotalData)
    }
    getTotalData()
  }, [])










  return (
    <Row gutter={[0, 15]}>
      <Col span={24} >
        <CSVLink
          headers={headers}
          data={allData}
          filename="users.csv"
          target="_blank"
        >
          <Button > 전체 다운로드
              </Button>
        </CSVLink>
        <CSVLink
          headers={headers}
          data={data}
          filename="users.csv"
          target="_blank"
        >
          <Button > 다운로드
              </Button>
        </CSVLink>

      </Col>
      <Col span={24}>

        <Radio.Group defaultValue={problem} size="large" onChange={onChangeProblem} style={{ marginBottom: 30 }}>
          <Radio.Button value="1">문제 1번</Radio.Button>
          <Radio.Button value="2">문제 2번</Radio.Button>
          <Radio.Button value="3">문제 3번</Radio.Button>
          <Radio.Button value="4">문제 4번</Radio.Button>
          <Radio.Button value="5">문제 5번</Radio.Button>
          <Radio.Button value="6">문제 6번</Radio.Button>
          <Radio.Button value="7">문제 7번</Radio.Button>
          <Radio.Button value="8">문제 8번</Radio.Button>
          <Radio.Button value="9">문제 9번</Radio.Button>
          <Radio.Button value="10">문제 10번</Radio.Button>
          <Radio.Button value="11">문제 11번</Radio.Button>
          <Radio.Button value="12">문제 12번</Radio.Button>
          <Radio.Button value="13">문제 13번</Radio.Button>
          <Radio.Button value="14">문제 14번</Radio.Button>
          <Radio.Button value="15">문제 15번</Radio.Button>

        </Radio.Group>
        <Table dataSource={data} columns={columns}></Table>
      </Col>
    </Row>

  );
}

// 함수로 작성한 styled component를 선언하세요.
const TimesRow = styled(Row)(({ theme }) => {
  return {};
});

