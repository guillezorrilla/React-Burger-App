import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-app-a8aa6.firebaseio.com/"
});

export default instance;
