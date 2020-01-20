import React from "react";
import styled from "styled-components";

const Dash = () => {
  return (
    <Root>
      <div className="banner page-wrapper">
        <h1>Test</h1>
      </div>
    </Root>
  );
};

export default Dash;

const Root = styled.div`
  height: 80%;
  .banner {
    background-size: auto 459px;

    background: url(https://gw.alipayobjects.com/zos/rmsportal/okhVRKJXxQpbpKGtKneS.svg)
      no-repeat center top;
    background-size: contain;
    overflow: hidden;
    font-family: PingFang SC, Helvetica Neue For Number, -apple-system,
      BlinkMacSystemFont, Segoe UI, Roboto, Hiragino Sans GB, Microsoft YaHei,
      Helvetica Neue, Helvetica, Arial, sans-serif;
  }
  .page-wrapper {
    width: 100%;
    will-change: transform;
    min-height: 550px;
  }
`;
