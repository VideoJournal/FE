import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";

export default function Footer() {
  return (
    <Root>
      <footer className="footer page-wrapper">
        <div className="footer-wrap page"></div>
        <div className="footer-bottom">
          <div className="page">
            <Row>
              <Col
                md={4}
                xs={24}
                style={{ textAlign: "left" }}
                className="mobile-hide"
              ></Col>
              <Col md={20} xs={24}>
                <span
                  className="mobile-hide"
                  style={{
                    lineHeight: "16px",
                    paddingRight: 12,
                    marginRight: 11
                  }}
                >
                  <a href="empty" rel="noopener noreferrer" target="_blank">
                    Video Journal
                  </a>
                </span>
                <span style={{ marginRight: 24 }} className="mobile-hide">
                  <a href="empty" rel="noopener noreferrer" target="_blank">
                    Lambda School
                  </a>
                </span>
                <span style={{ marginRight: 12 }}>Logo maybe</span>
                <span style={{ marginRight: 12 }}>
                  Project Made During Lambda X
                </span>
              </Col>
            </Row>
          </div>
        </div>
      </footer>
    </Root>
  );
}

const Root = styled.div`
  .footer {
    padding: 30px 0;
    background: linear-gradient(to bottom, #031d6a, #000e48);
    color: #fff;
  }
`;
