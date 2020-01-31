import React from 'react';
import styled from 'styled-components';

export default () => (
  <Button>
    <img
      src="https://img.icons8.com/color/48/000000/google-logo.png"
      alt="Google"
    ></img>
    <p>Sign in with Google</p>
  </Button>
);

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background: #ffffff;
  padding: 3px 5px;
  width: 13rem;
  border: 1px solid black;

  img {
    width: 20px;
    margin-right: 1rem;
  }

  p {
      font-size: 1rem;
      margin-top: 13px;
  }
`;
