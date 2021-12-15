import axios from "axios";

const api = axios.create({
  baseURL: "https://app-verzel.herokuapp.com/",
});

export default api;
