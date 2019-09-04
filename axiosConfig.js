import axios from "axios";

const fortniteApiURL = "https://fortniteapi.io/";
const cloudUrl = "https://us-central1-app-llamahub.cloudfunctions.net/";

export const fortniteHttp = axios.create({
  baseURL: fortniteApiURL,
  timeout: 10000,
  headers: { "Content-Type": "application/json" }
});

export const cloudHttp = axios.create({
  baseURL: cloudUrl,
  timeout: 30000,
  headers: { "Content-Type": "application/json" }
});
