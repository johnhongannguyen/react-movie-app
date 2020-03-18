import { API_KEY, BASE_URL } from "../config/api_config";
import axios from "axios";

 const api_search = async (category, query) => {
  const result = await axios.get(`${BASE_URL}/search/${category}?api_key=${API_KEY}&query=${query}`);  
  return result.data;
};

export default api_search;