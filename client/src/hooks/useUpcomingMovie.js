import axios from "axios";
import { Upcoming_Movie, options } from "../utilis/constant";
import { useDispatch } from "react-redux";
import { getUpcomingMovie } from "../redux/reducers/Movies.reducer";

const useUpcomingMovies = async () => {
    const dispatch = useDispatch();
    try {
        const response = await axios.get(Upcoming_Movie, options);
        dispatch(getUpcomingMovie(response.data.results))
    } catch (error) {
        console.log(error);
    }
}
export default useUpcomingMovies;