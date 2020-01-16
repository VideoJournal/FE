import React from "react";
import QueueAnim from "rc-queue-anim";
import { TweenOneGroup } from "rc-tween-one";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import { Row, Col } from "antd";
import { page1 } from "./pageData";
import styled from "styled-components";

const pointPos = [
  { x: -90, y: -20 },
  { x: 35, y: -25 },
  { x: -120, y: 125 },
  { x: -100, y: 165 },
  { x: 95, y: -5 },
  { x: 90, y: 160, opacity: 0.2 },
  { x: 110, y: 50 }
];

export default class Design extends React.PureComponent {
  state = {
    hoverNum: null
  };
  onMouseOver = i => {
    this.setState({
      hoverNum: i
    });
  };

  onMouseOut = () => {
    this.setState({
      hoverNum: null
    });
  };
  getEnter = e => {
    const i = e.index;
    const r = Math.random() * 2 - 1;
    const y = Math.random() * 10 + 5;
    const delay = Math.round(Math.random() * (i * 50));
    return [
      {
        delay,
        opacity: 0.4,
        ...pointPos[e.index],
        ease: "easeOutBack",
        duration: 300
      },
      {
        y: r > 0 ? `+=${y}` : `-=${y}`,
        duration: Math.random() * 1000 + 2000,
        yoyo: true,
        repeat: -1
      }
    ];
  };

  render() {
    const { hoverNum } = this.state;
    const { isMobile } = this.props;
    const children = page1.children.map((item, i) => {
      const isHover = hoverNum === i;
      const pointChild = [
        "point-ring left",
        "point-ring point-ring-0 right",
        "point-0",
        "point-2",
        "point-1",
        "point-3",
        "point-2"
      ].map((className, ii) => (
        <i
          className={className}
          key={ii.toString()}
          style={{
            background: item.color,
            borderColor: item.color
          }}
        />
      ));
      return (
        <Col md={8} xs={24} key={i.toString()} className="page1-item">
          <a
            className="page1-item-link"
            href={item.link}
            target="_blank"
            onMouseEnter={() => {
              this.onMouseOver(i);
            }}
            onMouseLeave={this.onMouseOut}
          >
            <TweenOneGroup
              enter={this.getEnter}
              leave={{
                x: 0,
                y: 30,
                opacity: 0,
                duration: 300,
                ease: "easeInBack"
              }}
              resetStyleBool={false}
              className="point-wrapper"
            >
              {(isHover || isMobile) && pointChild}
            </TweenOneGroup>
            <div
              className="page1-item-img"
              style={{ boxShadow: `0 16px 32px ${item.shadowColor}` }}
            >
              <img src={item.src} alt="img" />
            </div>
            <div className="page1-item-title">{item.title}</div>
            <p>{item.content}</p>
          </a>
        </Col>
      );
    });
    return (
      <Root>
        <div className="page-wrapper page1">
          <div className="page">
            <h1>{page1.title}</h1>
            <i />
            <OverPack>
              <QueueAnim key="queue" type="bottom" leaveReverse component={Row}>
                {children}
              </QueueAnim>
            </OverPack>
          </div>
        </div>
      </Root>
    );
  }
}

const Root = styled.div`
  .page1-item-img {
    padding: 120px 0;
    height: 150px;
  }
  .page1-item-title {
    margin-top: 40px;
  }
  .page1 {
    min-height: 720px;

    h1 {
      margin-top: 64px;
    }
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

  .point-wrapper {
    position: absolute;
    width: 0;
    left: 50%;
    top: 0;
    z-index: 0;
    .point-0 {
      width: 4px;
      height: 4px;
    }
    .point-2 {
      width: 10px;
      height: 10px;
    }
    .point-ring {
      width: 12px;
      height: 12px;
      border-style: solid;
      border-width: 1px;
      background: transparent !important;
    }
    .point-ring-0 {
      width: 4px;
      height: 4px;
    }
    .point-1 {
      width: 12px;
      height: 12px;
    }
    .point-3 {
      width: 21px;
      height: 21px;
    }
    i {
      display: inline-block;
      border-radius: 100%;
      position: absolute;
      opacity: 0;
      transform: translate(0, 30px);
    }
  }
`;
