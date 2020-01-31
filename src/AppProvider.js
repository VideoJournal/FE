import React, { useReducer, createContext, useEffect } from "react";
import { notification } from "antd";
import { axiosWithAuth } from "./components/Helpers/axios";

// const ADD_VIDEO = "ADD_VIDEO";
// const ADD_COMMENT = "ADD_COMMENT";
const FETCH_VIDEO = "FETCH_VIDEO";

const initialState = {
  videosData: [],
  comments: []
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
      notification.success({
        message: "Success",
        description: "Your Video has been added"
      });
      fetchVideoData();
      //dispatch({ type: ADD_VIDEO, payload: data.data });
    } catch (error) {
      notification.success({
        message: "Error",
        description: "Error uploding your video"
      });
      console.log(error);
    }
  };

  const addComment = async (comment, videoId) => {
    try {
      const { data } = await axiosWithAuth().post("/api/video", {
        comment: comment,
        video: videoId
      });
      console.log(data);
      notification.success({
        message: "Success",
        description: "Your Comment has been added"
      });
      fetchVideoData();
    } catch (error) {
      console.log(error);
      notification.success({
        message: "Error",
        description: "Error adding a comment"
      });
    }
  };

  const value = { state, addVideo, addComment };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
