import { API_KEY, BASE_URL } from "../config/api_config";
import axios from "axios";

const api_movies = async (category) =>{
    const result = await axios.get(`${BASE_URL}/movie/${category}?api_key=${API_KEY}`);
    return result.data;
}

export default api_movies;