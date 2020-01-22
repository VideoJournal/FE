import React from "react";
import { DefaultPlayer as Video } from "react-html5video";
import styled from "styled-components";

const VideoView = ({ src }) => {
  console.log(src);
  return (
    <div>
      <VideoWrapper
        loop
        muted
        controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
        // poster={isMobile ? item.imgMobile : item.img}
        key="video"
      >
        <source src={src} />
      </VideoWrapper>
    </div>
  );
};

export default VideoView;

const VideoWrapper = styled(Video);
