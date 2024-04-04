import axios from "axios";
import { getEnvVariables } from "../helpers";
const { VITE_API_URL } = getEnvVariables();
const gasteacApi = axios.create({
  baseURL: VITE_API_URL, 
});
export default gasteacApi;