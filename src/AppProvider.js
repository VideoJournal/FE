import React, { useReducer, createContext, useEffect } from "react";

const SET_CURRENT_VIDEO = "SET_CURRENT_VIDEO";

const initialState = {
  videosData: [],
  currentVideo:
    "https://res.cloudinary.com/dhsegkn40/video/upload/v1579531872/lmta3apkt93ooulacnzo.mp4"
};

export const AppContext = createContext();

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_VIDEO:
      return {
        ...state,
        currentVideo: payload
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

  const setCurentVideo = currentVideoURL => {
    dispatch({ type: SET_CURRENT_VIDEO, payload: currentVideoURL });
  };

  const value = { state, setCurentVideo };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
