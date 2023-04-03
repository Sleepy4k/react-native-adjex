import axios from "axios";
import config from "@config";

export default axios.create({
  baseURL: config.expo.extra.apiUrl,
  headers: {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

// Path: src\services\instanceApi.js
