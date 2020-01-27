import React, { useState } from "react";
import { postRequest } from "../Helpers/utilities";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { notification } from "antd";
export default function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  let history = useHistory();

  const onChangeHandler = e => {
    const value = e.target.value;
    const name = e.target.name;
    setUser(prev => ({ ...prev, [name]: value }));
  };
  const loginHandler = async () => {
    if (user.email.length > 1 && user.password.length > 1) {
      const response = await postRequest("signin", user);
      if (response.status) {
        localStorage.setItem("user-token", response.data.token);
        history.push("/dash");
        return notification.success({
          message: "Success",
          description: "Login Successful"
        });
      }
      return notification.error({
        message: "Error",
        description: response
      });
    }
  };

  return (
    <Div>
      <h1>Login</h1>
      <form action="" onSubmit={e => e.preventDefault()}>
        <div>
          <label forhtml="">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={onChangeHandler}
            required
            minLength="5"
          />
        </div>
        <div>
          <label forhtml="">Password</label>
          <input
            name="password"
            type="password"
            placeholder="**********"
            onChange={onChangeHandler}
            required
            minLength="5"
          />
        </div>
        <button onClick={loginHandler}>Login</button>
      </form>
    </Div>
  );
}

const Div = styled.div`
  max-width: 400px;
  margin: 0 auto;
  background: #fff;
  margin: 20vh auto;
  padding: 20px;
  border: 1px solid #ebedf0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
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
