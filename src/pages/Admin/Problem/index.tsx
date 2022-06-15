// import dependency modules : package.json에 명시된 외부모듈을 선언하세요.
import { Row, Col, Table, Switch } from 'antd';
import styled from 'styled-components';
import { useState, useEffect } from "react"
import { collection, updateDoc, getDocs, query, where } from 'firebase/firestore/lite';
import { db } from '@src/firebaseConfig'
// import local modules : 지역(route)에서 사용중인 모듈을 선언하세요.
import { doc, getDoc } from 'firebase/firestore/lite';

export default function Problem() {

  const [data, setData]: any[] = useState([])

  useEffect(() => {
    const getProblemData = async () => {
      const problemRef = collection(db, "problem");
      const querySnapshot = await getDocs(problemRef);
      let result: any[] = []
      querySnapshot.forEach((doc: any) => {
        result.push(doc.data())
      });
      setData(result)
    }
    getProblemData()
  }, [])

  const onChangeValid = async (valid: boolean, id: number) => {
    console.log(`switch to ${id}`);

    if (id) {
      const problemDocRef = doc(db, "problem", id.toString());
      await updateDoc(problemDocRef, {
        valid: !valid
      })
    }
  };


  const columns = [
    {
      key: 'problem',
      title: "문제",
      dataIndex: ['problem'],
    },
    {
      key: 'valid',
      title: '열기',
      dataIndex: ['valid'],
      render: (valid: boolean, record: any) => {
        console.log(valid)
        const id = record.id
        return <Switch defaultChecked={valid} onChange={() => onChangeValid(valid, id)}></Switch>
      }
    },

  ]





  return (
    <Table dataSource={data} columns={columns}></Table>
  );
}

// 함수로 작성한 styled component를 선언하세요.
const ProblemRow = styled(Row)(({ theme }) => {
  return {};
});

