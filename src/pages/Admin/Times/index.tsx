// import dependency modules : package.json에 명시된 외부모듈을 선언하세요.
import { Row, Col, Radio, Table } from 'antd';
import styled from 'styled-components';
import { useState, useEffect } from "react"
import { doc, getDocs, collection } from 'firebase/firestore/lite';
import { db } from '@src/firebaseConfig'
import dayjs from "dayjs"
export default function Times() {

  const [problem, setProblem] = useState("1")
  const [data, setData] = useState<any[]>([])
  console.log(problem)

  const onChangeProblem = (e: any) => {
    setProblem(e.target.value)
  }

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
      key: 'createdTime',
      title: '생성시간',
      dataIndex: ['createdTime'],
    },
  ]

  useEffect(() => {
    const getTimeData = async () => {
      const timeRef = collection(db, "problem", problem, "user")
      const querySnapshot = await getDocs(timeRef)
      let data: any[] = []
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        data.push(doc.data())
      });
      const sortedData = data.sort((a, b) => {
        const isBefore = dayjs(a.createdTime).isBefore(dayjs(b.createdTime))
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

  console.log(data)


  return (
    <Row>
      <Col span={24}>
        <Radio.Group defaultValue={problem} size="large" onChange={onChangeProblem}>
          <Radio.Button value="1">문제 1번</Radio.Button>
          <Radio.Button value="2">문제 2번</Radio.Button>
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

