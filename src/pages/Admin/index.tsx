// import dependency modules : package.json에 명시된 외부모듈을 선언하세요.
import { useNavigate } from 'react-router-dom';
import { Button, Form, FormProps, Row, Col, Input, message } from 'antd';
import Password from 'antd/lib/input/Password';
import styled from 'styled-components';
// import global modules : 서비스 전역에서 사용중인 모듈을 선언하세요.

// import local modules : 지역(route)에서 사용중인 모듈을 선언하세요.

export default function LoginForm() {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const formProps: FormProps = {
    form,
    layout: 'vertical',
    autoComplete: 'off',
    onFinish(fields: any) {
      // if (fields.username !== "a01096339134@gmail.com" || fields.password !== "Maka9134!!") {
      //   message.error('아이디나 비번이 틀립니다.');
      // } else {
      localStorage.setItem('authorization', "admin");
      navigate('/dashboard');
      // }
    },
  };

  return (
    <BeforeStartRow>
      <BeforeStartCol span={24}>
        <Form {...formProps}>
          <Form.Item name="username" required label="EMAIL">
            <Input />
          </Form.Item>
          <Form.Item name="password" required label="PASSWORD">
            <Password />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" block>Login</Button>
          </Form.Item>
        </Form>
      </BeforeStartCol>
    </BeforeStartRow>
  );
}

const BeforeStartRow = styled(Row)(({ theme }) => {
  return {
    height: "100vh"
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

