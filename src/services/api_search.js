import { API_KEY, BASE_URL } from "../config/api_config";
import axios from "axios";

 export const getSearchs = async (category, query) => {
  const result = await axios
  .get(`${BASE_URL}/search/${category}?api_key=${API_KEY}&query=${query}`)
  .catch(error =>{
    return error('wrong path');
}) 
  return result.data.results;
};

