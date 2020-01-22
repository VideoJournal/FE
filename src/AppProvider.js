import React, { useReducer, createContext, useEffect } from "react";

const ADD_VIDEO = "ADD_VIDEO";

const initialState = {
  videosData: [
    "https://res.cloudinary.com/dhsegkn40/video/upload/v1579702236/wkiemsc79uclgxa8ekz6.mp4",
    "https://res.cloudinary.com/dhsegkn40/video/upload/v1579702236/wkiemsc79uclgxa8ekz6.mp4"
  ],
  currentVideo:
    "https://res.cloudinary.com/dhsegkn40/video/upload/v1579531872/lmta3apkt93ooulacnzo.mp4"
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
