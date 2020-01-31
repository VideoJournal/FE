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
  background: white;
`;
