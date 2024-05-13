import axios from "axios";
import { Top_Rated_Movie, options } from "../utilis/constant";
import { useDispatch } from "react-redux";
import { getTopRatedMovie } from "../redux/reducers/Movies.reducer";

const useTopRatedMovies = async () => {
    const dispatch = useDispatch();
    try {
        const response = await axios.get(Top_Rated_Movie, options);
        dispatch(getTopRatedMovie(response.data.results))
    } catch (error) {
        console.log(error);
    }
}
export default useTopRatedMovies;