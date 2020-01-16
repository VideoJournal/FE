import "react-html5video/dist/styles.css";
import React from "react";
import TweenOne from "rc-tween-one";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import BannerAnim from "rc-banner-anim";
import { DefaultPlayer as Video } from "react-html5video";
import { page3 } from "./videoData";
import styled from "styled-components";

const { Element } = BannerAnim;
const { BgElement } = Element;

export default class Page3 extends React.PureComponent {
  render() {
    const { isMobile } = this.props;
    const children = page3.children.map((item, i) => (
      <Element key={i.toString()}>
        <BgElement className="banner" key="bg">
          <Video
            loop
            muted
            controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
            poster={isMobile ? item.imgMobile : item.img}
            key="video"
          >
            <source src={item.src} />
          </Video>
        </BgElement>
      </Element>
    ));
    const childrenToRender = (
      <TweenOne
        key="banner-wrapper"
        animation={{ type: "from", y: 30, opacity: 0 }}
      >
        <BannerAnim
          type="across"
          thumb={false}
          duration={550}
          ease="easeInOutQuint"
          style={{ height: "700px" }}
        >
          {children}
        </BannerAnim>
      </TweenOne>
    );
    return (
      <Root>
        <div className="page-wrapper page3">
          <div className="page">
            <h1>{page3.title}</h1>
            <i />
            {React.createElement(
              isMobile ? "div" : OverPack,
              { className: "banner-wrapper" },
              childrenToRender
            )}
          </div>
        </div>
      </Root>
    );
  }
}

const Root = styled.div`
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
    min-height: 720px;
  }

  .page {
    width: 100%;
    max-width: 1200px;
    padding: 0 24px;
    margin: auto;
    overflow: hidden;
    text-align: center;

    h1 {
      margin: 0 auto 32px;
      font-size: 38px;
      line-height: 46px;
      color: #0d1a26;
      font-weight: 400;
      text-align: center;
    }

    i {
      width: 64px;
      margin: auto;
      height: 2px;
      display: block;
      background: rgb(22, 217, 227);
      background: linear-gradient(
        to right,
        rgba(22, 217, 227, 1) 0%,
        rgba(22, 119, 227, 1) 100%
      );
    }
  }
`;
