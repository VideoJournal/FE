import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom'
import { header } from './headerData';
import styled from 'styled-components'

export default function Header(props) {
  const menuChild = header.map((item, i) => {
    return (
      <Col key={i.toString()} span={6}>
        <Link className="nav-title" to={item.link}>{item.title}</Link>
      </Col>
    );
  });
  return (
    <Root>

      <header {...props}>
        <Row className="nav">
          {menuChild}
        </Row>
      </header>
    </Root>
  );
}

const Root = styled.nav`
  .nav{
    max-width: 424px;
    text-align: center;
    margin: auto;
    display: block;
    padding-top: 22px;
    border-top: 2px solid transparent;
    transition: 1s all;
    &:hover {
      border-top-color: #fff;
    }
    .nav-title{
      cursor: pointer;
    color: darkred;
    &:hover {
      color: green;
    }
  }
  }
`