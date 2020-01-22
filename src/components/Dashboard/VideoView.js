import React from "react";
import { DefaultPlayer as Video } from "react-html5video";
import CommentSection from "./CommentSection";
import styled from "styled-components";

const VideoView = ({ src }) => {
  console.log(src);
  return (
    <Root>
      <VideoWrapper
        loop
        muted
        controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
        // poster={isMobile ? item.imgMobile : item.img}
        key="video"
      >
        <source src="https://res.cloudinary.com/dhsegkn40/video/upload/v1579702236/wkiemsc79uclgxa8ekz6.mp4" />
      </VideoWrapper>
      <CommentSection />
    </Root>
  );
};

export default VideoView;

const VideoWrapper = styled(Video)`
  width: 800px;
  margin-top: 40px;
`;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
