import axios from "axios";

export const url = import.meta.env.API_URL;
export const paths = {
  random: "/random",
};

export const fetchTrack = async (setMetadata, isRandom = true) => {
  try {
    const request = await axios.get(`${url}${isRandom && paths.random}`);
    setMetadata(request?.data);
  } catch (error) {
    console.error(error);
  }
};
