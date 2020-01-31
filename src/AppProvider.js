import React, { useReducer, createContext, useEffect } from "react";
import uuid from "uuid";
import { axiosWithAuth } from "./components/Helpers/axios";

const ADD_VIDEO = "ADD_VIDEO";
const FETCH_VIDEO = "FETCH_VIDEO";

const initialState = {
  videosData: []
};

export const AppContext = createContext();

const reducer = (state, { type, payload }) => {
  switch (type) {
    // case ADD_VIDEO:
    //   return {
    //     ...state,
    //     videosData: state.videosData.concat(payload)
    //   };
    case FETCH_VIDEO:
      return {
        ...state,
        videosData: payload
      };
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchVideoData();
  }, []);

  const fetchVideoData = async () => {
    try {
      const { data } = await axiosWithAuth().get("/api/user");
      dispatch({ type: FETCH_VIDEO, payload: data.data.videos });
    } catch (error) {
      console.log("ERRORRRR", error);
    }
  };

  const addVideo = async currentVideoURL => {
    try {
      const { data } = await axiosWithAuth().post("/api/video", {
        videos: [currentVideoURL],
        description: "Video"
      });
      fetchVideoData();
      //dispatch({ type: ADD_VIDEO, payload: data.data });
    } catch (error) {
      console.log(error);
    }
  };

  const value = { state, addVideo };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
