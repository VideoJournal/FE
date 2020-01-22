import 'rc-banner-anim/assets/index.css';
import React from 'react';
import QueueAnim from 'rc-queue-anim';
import BannerAnim from 'rc-banner-anim';
import { Button } from 'antd';
import { banner } from './bannerData';
import styled from 'styled-components';

const { Element } = BannerAnim;
const { BgElement } = Element;

class Banner extends React.PureComponent {
  render() {
    // const { isMobile } = this.props;
    const bannerChildren = banner.map((item, i) => {
      const children = item.children.map((child, ii) => {
        const tag = child.tag === 'button' ? 'div' : child.tag || 'p';
        const childrenToRender =
          child.tag === 'button' ? (
            <Button>
              <a href={child.link} target="_blank" rel="noopener noreferrer">
                {child.children}
              </a>
            </Button>
          ) : (
            child.children
          );
        return React.createElement(
          tag,
          {
            key: ii.toString(),
            className: child.className,
            style: child.style || {}
          },
          childrenToRender
        );
      });
      return (
        <Element key={i.toString()}>
          <BgElement
            key="bg"
            className="banner-bg"
            style={{
              backgroundImage: `url(${item.img})`
            }}
          />
          <QueueAnim
            key="text"
            className={item.className}
            ease={['easeOutCubic', 'easeInQuad']}
            type={item.queueAnim || 'bottom'}
          >
            {children}
          </QueueAnim>
        </Element>
      );
    });
    return (
      <Root>
        <div className="banner page-wrapper">
          <div className="page">
            <div className="logo" />
            <BannerAnim
              type="across"
              duration={550}
              ease="easeInOutQuint"
              style={{ height: '580px' }}
            >
              {bannerChildren}
            </BannerAnim>
          </div>
        </div>
      </Root>
    );
  }
}

export default Banner;

const Root = styled.div`
  .banner-bg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    background-position: center;
    background-repeat: no-repeat;
  }

  .logo {
    /* background: url(https://gw.alipayobjects.com/zos/rmsportal/khXpcyRYlACLokoNTzwc.svg)
      no-repeat; */
    width: 127px;
    height: 110px;
    margin: 86px auto 40px;
  }

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
      margin: 144px auto 32px;
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
