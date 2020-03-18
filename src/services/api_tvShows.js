import { API_KEY, BASE_URL } from "../config/api_config";
import axios from "axios";

const api_tvShows = async (category) =>{
    const result = await axios.get(`${BASE_URL}/tv/${category}?api_key=${API_KEY}`);
    return result.data;
}

export default api_tvShows;