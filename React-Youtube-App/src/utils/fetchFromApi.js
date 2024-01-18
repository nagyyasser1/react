import axios from "axios";

const options = {
  method: "GET",
  url: "https://youtube-v31.p.rapidapi.com/captions",
  params: {
    part: "snippet",
    videoId: "M7FIvfx5J10",
    maxResults: 48,
  },
  headers: {
    "X-RapidAPI-Key": "4805a1b7a1mshf69e9700cdcbd10p1d4e24jsn5b9f66423ed6",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
