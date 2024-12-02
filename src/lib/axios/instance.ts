import axios from "axios";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Cache-Control": "no-cache",
  Exprires: 0,
};

const instance = axios.create({
  baseURL: "https://syahridho.web.id",
  headers,
});

export default instance;
