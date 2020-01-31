import React from 'react';
import styled from 'styled-components';

export default ({ usage }) => (
  <Anchor href="https://videojournal.herokuapp.com/auth/google">
    <img
      src="https://img.icons8.com/color/48/000000/google-logo.png"
      alt="Google"
    ></img>
    <p>{usage} with Google</p>
  </Anchor>
);

const Anchor = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  background: #ffffff;
  padding: 3px 5px;
  width: 13rem;
  height: 2.5rem;
  border: 1px solid #ffffff;
  border-radius: 5px;
  margin: 20px 0;

  -webkit-box-shadow: 0px 3px 5px 0px rgba(97, 97, 97, 1);
  -moz-box-shadow: 0px 3px 5px 0px rgba(97, 97, 97, 1);
  box-shadow: 0px 3px 3px 0px rgba(97, 97, 97, 1);

  img {
    width: 20px;
    margin-right: 1rem;
  }

  p {
    font-size: 1rem;
    font-weight: 500;
    margin-top: 12px;
    color: #6d6d6d;
  }
`;
