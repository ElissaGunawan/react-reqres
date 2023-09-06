import axios from "axios";

export default URL = axios.create({
    baseURL : "https://reqres.in/api",
});