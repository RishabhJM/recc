const API_KEY = "5d4250357fef39231bde41d9fd24f672";

export default {
    fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_genres=28`,

}
