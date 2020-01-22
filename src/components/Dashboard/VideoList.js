import React, { useContext } from "react";
import { AppContext } from "../../AppProvider";
import { DefaultPlayer as Video } from "react-html5video";
import styled from "styled-components";

const VideoList = () => {
  const { state } = useContext(AppContext);
  const { videosData } = state;
  console.log(videosData);
  return (
    <Root>
      <h1>Your Videos</h1>
      <Grid>
        {videosData.map((vid, idx) => {
          console.log(vid);
          return (
            <Video
              loop
              muted
              controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
              // poster={isMobile ? item.imgMobile : item.img}
              key={idx}
            >
              <source src={vid} />
            </Video>
          );
        })}
      </Grid>
    </Root>
  );
};

export default VideoList;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 400px);
  justify-items: center;
  gap: 50px;
`;
