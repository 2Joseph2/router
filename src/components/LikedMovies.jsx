import MovieCard from "./MovieCard";

const LikedMovies = ({movieList}) => {
    return ( 
        <div className="liked">
            {movieList.map((el)=>{
                if (el.liked) {
                    return <MovieCard el={el} />
                }
            })}
        </div>
     );
}
 
export default LikedMovies;