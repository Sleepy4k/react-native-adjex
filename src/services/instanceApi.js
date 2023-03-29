import axios from "axios";
import config from "../../app.json";

export default axios.create({
  baseURL: config.expo.extra.apiUrl,
  headers: {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

// Path: src\services\instanceApi.js
