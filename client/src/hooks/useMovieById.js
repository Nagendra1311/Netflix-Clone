import axios from "axios"
import { options } from "../utilis/constant";
import { useDispatch } from "react-redux";
import { getTrailerMovie } from "../redux/reducers/Movies.reducer";
import { useEffect } from "react";


const useMovieById = async (movieId) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getTrailerVideo = async () => {
            try {
                const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options)
                const trailer = res.data.results.filter((item) => {
                    return item.type === "Trailer"
                })
                console.log(trailer)

                dispatch(getTrailerMovie(trailer.length > 0 ? trailer[0] : res.data.results[0]))


            } catch (error) {
                console.log(error.message);

            }
        }
        getTrailerVideo()
    }, [movieId])
}
export default useMovieById;