import axios from "axios";

const url = "https://stage-api.serw.io/v1";

export default axios.create({
  baseURL: url,
});
