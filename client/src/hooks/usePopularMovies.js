import axios from "axios";
import { Popular_Movie, options } from "../utilis/constant";
import { useDispatch } from "react-redux";
import { getPopularMovies } from "../redux/reducers/Movies.reducer";

const usePopularMovies = async () => {
    const dispatch = useDispatch();
    try {
        const response = await axios.get(Popular_Movie, options);
        dispatch(getPopularMovies(response.data.results))
    } catch (error) {
        console.log(error);
    }
}
export default usePopularMovies;