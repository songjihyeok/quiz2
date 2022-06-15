// import dependency modules : package.json에 명시된 외부모듈을 선언하세요.
import { Row, Col, Layout, Typography, Menu } from 'antd';
import { useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Link, Outlet } from "react-router-dom"
// import global modules : 서비스 전역에서 사용중인 모듈을 선언하세요.

const { Title } = Typography
const { Content, Header } = Layout
export default function Dashboard() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = window.localStorage.getItem("authorization")
    if (token !== "admin") {
      navigate("/admin")
    }
  }, [])



  return (<StyledLayout>
    <StyledHeader>
      <Row align="middle" gutter={[15, 0]}>
        <Col>
          <StyledTitle level={3}>Admin</StyledTitle>
        </Col>
        <Col>
          <StyledMenu
            mode="horizontal"
            // defaultSelectedKeys={[router.pathname.replace('/admin/', '')]}
            items={[
              {
                key: 'problems',
                label: <Link to="/dashboard/problem">문제</Link>,
              },
              {
                key: 'time',
                label: <Link to="/dashboard/time">시간 </Link>,
              },
            ]}
          />
        </Col>
      </Row>
    </StyledHeader>
    <StyledContent>
      <Outlet />
    </StyledContent>
  </StyledLayout>
  );
}

// 함수로 작성한 styled component를 선언하세요.

// 함수로 작성한 styled component를 선언하세요.
const StyledLayout = styled(Layout)(({ theme }) => ({
  height: '100%',
}));

const StyledHeader = styled(Header)(({ theme }) => ({
  backgroundColor: 'transparent',
  padding: '10px 20px',
}));



const StyledTitle = styled(Title)(({ theme }) => ({
  ['&&']: {
    marginBottom: 0,
  },
}));

const StyledMenu = styled(Menu)(({ theme }) => ({
  ['&&&&']: {
    width: 430,
    backgroundColor: 'transparent',
  },
}));

const StyledContent = styled(Content)(({ theme }) => ({
  overflowY: 'scroll',
  padding: 20,
}));

const SpaceCol = styled(Col)(({ theme }) => ({
  width: 'calc(100% - 950px)',
}));