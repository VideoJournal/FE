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
  height: 2.5rem;
  border: 1px solid black;
  border-radius: 5px;

  -webkit-box-shadow: 0px 3px 5px 0px rgba(97, 97, 97, 1);
  -moz-box-shadow: 0px 3px 5px 0px rgba(97, 97, 97, 1);
  box-shadow: 0px 3px 5px 0px rgba(97, 97, 97, 1);

  img {
    width: 20px;
    margin-right: 1rem;
  }

  p {
    font-size: 1rem;
    margin-top: 12px;
  }
`;
