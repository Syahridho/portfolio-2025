import axios from "axios";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Cache-Control": "no-cache",
  Expires: 0,
};

// const getBaseURL = () => {
//   const hostname =
//     typeof window !== "undefined" ? window.location.hostname : "";

//   if (hostname === "syahridho.web.id") {
//     return "https://syahridho.web.id";
//   } else if (hostname === "www.syahridho.web.id") {
//     return "https://www.syahridho.web.id";
//   } else if (hostname === "portfolio-ten-liard-53.vercel.app") {
//     return "https://portfolio-ten-liard-53.vercel.app";
//   } else if (hostname === "localhost") {
//     return "http://localhost:3000";
//   }

//   // Default fallback
//   return "https://syahridho.web.id";
// };

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers,
});

export default instance;
