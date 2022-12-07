import React, { useState } from "react";
import "./style.css";
import PropTypes from "prop-types";
import background from "../../assets/10808.jpg";
import { useMutation, useQueryClient } from "react-query";
import { register } from "../../service";
import { Button, Input, Checkbox, Form, } from "antd";

export const SignUpForm = ({
  loginForm,
  setLoginForm,
  setOpenSnackBar,
  setTitle
}) => {
  const [error, setError] = useState(false)

  const queryClient = useQueryClient()

  const { mutate } = useMutation(register, {
    onSuccess: () => {
      setOpenSnackBar(true);
      setLoginForm(true);
      setTitle("Created successfully")
      queryClient.invalidateQueries('users', { exact: true })
    },
    onError: (data) => {
      setError(true)
    }
  });


  const onFinish = (values) => {
    const data = {
      "username": values.username,
      "password": values.password
    }
    mutate(data)
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };



  const handleSwitch = () => {
    setLoginForm(true);
  };



  return (
    <>
      <div className={!loginForm ? "signup-wrapper" : "signup-wrapper-hide"}>
        <div className="background">
          <img style={{ width: "100%" }} src={background} alt="login" />
        </div>
        <div className="signup-form">
          <div style={{ width: "70%", alignSelf: "center" }}>
            <h1>Sign up</h1>
            <div>
              <span>
                Already have an account?{" "}
                <span
                  onClick={handleSwitch}
                  style={{ color: "blue", cursor: "pointer" }}
                >
                  Sign in
                </span>
              </span>
            </div>


            <Form
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                  () => ({
                    validator() {
                      if (error) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('Username already exist'));
                    },
                  }),
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                  { min: 5, message: 'Password must be minimum 8 characters.' },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                label="Confirm Password"
                name="confirm"
                dependencies={['password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }

                      return Promise.reject(new Error('The two passwords that you entered do not match!'));
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>

          </div>
        </div>
      </div>
    </>
  );
};

SignUpForm.propTypes = {
  setLoginForm: PropTypes.func,
  loginForm: PropTypes.bool,
};
