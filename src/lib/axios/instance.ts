import axios from "axios";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Cache-Control": "no-cache",
  Exprires: 0,
};

let baseURL = "";

if (typeof window !== "undefined") {
  const hostname = window.location.hostname;

  if (hostname === "localhost") {
    baseURL = "https://localhost:3000";
  } else if (
    hostname === "syahridho.web.id" ||
    hostname === "www.syahridho.web.id"
  ) {
    baseURL = "https://syahridho.web.id";
  } else if (hostname === "portfolio-ten-liard-53.vercel.app") {
    baseURL = "https://portfolio-ten-liard-53.vercel.app";
  } else {
    baseURL = "https://syahridho.web.id";
  }
}

const instance = axios.create({
  baseURL,
  headers,
});

export default instance;
