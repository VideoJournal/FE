import React, { useReducer, createContext, useEffect } from "react";
import uuid from "uuid";

const ADD_VIDEO = "ADD_VIDEO";

const initialState = {
  videosData: [
    {
      id: uuid(),
      videoUrl:
        "https://res.cloudinary.com/dhsegkn40/video/upload/v1579707553/bcttlvex6mb54lhvyc83.mp4"
    },
    {
      id: uuid(),
      videoUrl:
        "https://res.cloudinary.com/dhsegkn40/video/upload/v1579707553/bcttlvex6mb54lhvyc83.mp4"
    },
    {
      id: uuid(),
      videoUrl:
        "https://res.cloudinary.com/dhsegkn40/video/upload/v1579707553/bcttlvex6mb54lhvyc83.mp4"
    }
  ]
};

export const AppContext = createContext();

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_VIDEO:
      return {
        ...state,
        videosData: state.videosData.concat(payload)
      };

    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    //not yes implmemented
    //fetchVideoData();
  }, []);

  const addVideo = currentVideoURL => {
    dispatch({ type: ADD_VIDEO, payload: currentVideoURL });
  };

  const value = { state, addVideo };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
