import axios from "axios";

export const appAxios = axios.create({
  baseURL: import.meta.env.OSM_API_URL,
  headers: {
    "Content-type": "application/json",
  },
});
