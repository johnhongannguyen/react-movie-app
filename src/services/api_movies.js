import { API_KEY, BASE_URL } from "../config/api_config";
import axios from "axios";

export const getMovies = async (category) =>{
    const result = await axios
    .get(`${BASE_URL}/movie/${category}?api_key=${API_KEY}`)
    .catch(error =>{
        return error('wrong path');
    })
    return result.data.results;
}

