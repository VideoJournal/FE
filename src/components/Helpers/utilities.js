import Axios from 'axios';

export const postRequest = async (route, payLoad) => {
  try {
    const response = await Axios.post(
      `${process.env.REACT_APP_HEROKU}/${route}`,
      payLoad
    );
    return response;
  } catch (error) {
    return error.message;
  }
};
