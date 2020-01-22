import React, { useContext } from "react";
import { AppContext } from "../../AppProvider";
import { DefaultPlayer as Video } from "react-html5video";

import styled from "styled-components";
import VideoView from "./VideoView";

const VideoList = () => {
  const { state } = useContext(AppContext);
  const { videosData } = state;
  console.log(videosData);
  return (
    <Root>
      {videosData.map(vid => {
        console.log(vid);
        return (
          <Video
            loop
            muted
            controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
            // poster={isMobile ? item.imgMobile : item.img}
            key="video"
          >
            <source src={vid} />
          </Video>
        );
      })}
    </Root>
  );
};

export default VideoList;

const Root = styled.div`
  display: grid;
`;
