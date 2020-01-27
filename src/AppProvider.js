import React, { useReducer, createContext, useEffect } from "react";
import uuid from "uuid";
import { axiosWithAuth } from "./components/Helpers/axios";

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
    //console.log(ls.get());
  }, []);

  const addVideo = async currentVideoURL => {
    try {
      const { data } = await axiosWithAuth().post("/api/video", {
        videos: [currentVideoURL],
        description: "Video"
      });
      dispatch({ type: ADD_VIDEO, payload: data.data });
    } catch (error) {
      console.log(error);
    }
  };

  const value = { state, addVideo };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
