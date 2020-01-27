import axios from "axios";
import localstorage from "./localstotage";

export const Axios = () => {
  return axios.create({
    headers: {
      "Content-Type": "application/json"
    },
    baseURL: process.env.REACT_APP_API_HOST
  });
};

export const axiosWithAuth = () => {
  //console.log("BASE URL: ", process.env.REACT_APP_API_HOST);
  console.log("TOken: ", localstorage.get());
  const costumToken = localstorage.get() && "Bearer " + localstorage.get();
  return axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: costumToken || ""
    },
    baseURL: "https://videojournal.herokuapp.com"
  });
};
