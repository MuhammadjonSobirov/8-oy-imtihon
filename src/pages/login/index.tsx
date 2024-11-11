import "./login.css";
import { LockOutlined, UserOutlined, PhoneOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
    navigate('/register');
  };

  return (
    <div className="login">
      <div className="login__container">
        <h3 className="login__title">Зарегистрироваться</h3>
        <div className="login__form">
          <Form
            name="normal_login"
            initialValues={{ remember: true }}
            style={{ maxWidth: 360 }}
            onFinish={onFinish}
          >
            <Form.Item
              name="phone"
              rules={[
                { required: true, message: 'Please enter your phone number!' },
                { pattern: /^\d{9}$/, message: 'Please enter a valid phone number!' }
              ]}
            >
              <Input type="number" prefix={<PhoneOutlined />} placeholder="Phone Number" />
            </Form.Item>

            <Form.Item
              name="name"
              rules={[{ required: true, message: 'Please enter your name!' }]}
            >
              <Input prefix={<UserOutlined />} placeholder="Name" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please enter your password!' }]}
              hasFeedback
            >
              <Input.Password prefix={<LockOutlined />} placeholder="Password" />
            </Form.Item>

            <Form.Item
              name="confirm"
              dependencies={['password']}
              hasFeedback
              rules={[
                { required: true, message: 'Please confirm your password!' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Passwords do not match!'));
                  },
                }),
              ]}
            >
              <Input.Password prefix={<LockOutlined />} placeholder="Confirm Password" />
            </Form.Item>

            <Form.Item>
              <button block type="primary" htmlType="submit" className="login__button">
              Далее
              </button>
              Уже есть аккаунт? <a className="login__link" href="#">Войти</a>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
