import axios from "axios";
import { Now_Playing_Movie, options } from "../utilis/constant";
import { useDispatch } from "react-redux";
import { getNowPlayingMovies } from "../redux/reducers/Movies.reducer";

const useNowPlayingMovies = async () => {
    const dispatch = useDispatch();
    try {
        const response = await axios.get(Now_Playing_Movie, options);
        dispatch(getNowPlayingMovies(response.data.results))
    } catch (error) {
        console.log(error);
    }
}
export default useNowPlayingMovies;