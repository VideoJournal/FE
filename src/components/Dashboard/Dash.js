import React, { useContext } from "react";
import { AppContext } from "../../AppProvider";
import styled from "styled-components";
import { Button } from "antd";
import VideoList from "./VideoList";

const Dash = () => {
  const { addVideo } = useContext(AppContext);
  const checkUploadResult = resultEvent => {
    if (resultEvent.event === "success") {
      console.log(resultEvent.info.secure_url);
      addVideo(resultEvent.info.secure_url);
    }
  };

  const widget = window.cloudinary.createUploadWidget(
    {
      cloudName: "dhsegkn40",
      uploadPreset: "videoJournal"
    },
    (error, result) => {
      checkUploadResult(result);
    }
  );

  const showWidget = widget => {
    widget.open();
  };
  return (
    <Root>
      <Main className="banner page-wrapper">
        <h1>Upload Your Video</h1>
        <Button onClick={() => showWidget(widget)}>Upload</Button>
      </Main>
      <VideoList />
    </Root>
  );
};

export default Dash;

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
    min-height: 500px;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: white;
  }
`;
