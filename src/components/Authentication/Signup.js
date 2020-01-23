import React, { useState } from 'react';
import { postRequest } from '../Helpers/utilities';
import styled from 'styled-components';
import { notification } from 'antd';
export default function Signup() {
  const [user, setUser] = useState({
    email: '',
    password: '',
    userName: '',
    name: ''
  });
  const onChangeHandler = e => {
    const value = e.target.value;
    const name = e.target.name;
    setUser(prev => ({ ...prev, [name]: value }));
  };
  const signUpHandler = () => {
    if (user.email.length > 1 && user.password.length > 1) {
      const response = postRequest('signup', user);
      if (response.status) {
        localStorage.setItem('user-token', response.data.token);
        return notification.success({
          message: 'Success',
          description: 'Login Successful'
        });
      }
      return notification.error({
        message: 'Error',
        description: response
      });
    }
  };

  return (
    <Div>
      <h1>Signup</h1>
      <form action="" onSubmit={e => e.preventDefault()}>
        <div>
          <label forhtml="">Name</label>
          <input
            name="name"
            type="text"
            placeholder="Name"
            required
            minLength="5"
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <label forhtml="">Username</label>
          <input
            name="userName"
            type="text"
            placeholder="Username"
            required
            minLength="5"
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <label forhtml="">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            minLength="5"
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <label forhtml="">Password</label>
          <input
            name="password"
            type="password"
            placeholder="**********"
            required
            minLength="5"
            onChange={onChangeHandler}
          />
        </div>
        <button onClick={signUpHandler}>Login</button>
      </form>
    </Div>
  );
}
const Div = styled.div`
  max-width: 400px;
  margin: 0 auto;
  background: #fff;
  margin: 10vh auto;
  padding: 20px;
  border: 1px solid #ebedf0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  h1 {
    font-weight: 200;
    font-size: 40px;
  }
  form {
    div {
      label {
        display: block;
        margin-bottom: 10px;
      }
      input {
        width: 100%;
        font-size: 14px;
        padding: 5px;
        margin-bottom: 10px;
        line-height: 1.5;
        background-color: #fff;
        border: 1px solid #d9d9d9;
        border-radius: 4px;
      }
    }
    button {
      margin-top: 10px;
      padding: 5px 30px;
      color: #fff;
      background-color: #1890ff;
      border-color: #1890ff;
      text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
      box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
      &:hover {
        color: #fff;
        background-color: #40a9ff;
        border-color: #40a9ff;
      }
    }
  }
`;
