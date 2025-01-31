export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOGU5MjlmY2Y4OGJjOTFlYjljNjhhYzljMDFhYWY0MSIsIm5iZiI6MTY5MjExMTczMS40MDksInN1YiI6IjY0ZGI5MzczZDEwMGI2MDExYzgzZDk2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xiTaJDKEQ4rBkpfhm5ySFhITGifhQfs1t-BY95mJCM0",
  },
};

export const API = {
  getNowPlayingMovies: "https://api.themoviedb.org/3/movie/now_playing?page=1",
  getTrendingMovies: " https://api.themoviedb.org/3/movie/top_rated?page=1",
  getVideos: "https://api.themoviedb.org/3/movie/939243/videos?language=en-US",
  getUpcommingMovies: "https://api.themoviedb.org/3/movie/upcoming?page=1",
  getVideoss: (movieId) =>
    `https://api.themoviedb.org/3/movie/${movieId}/videos`,
  //811941
  // getMovieDetails: `https://api.themoviedb.org/3/movie/1249289?language=en-US`,
  getMovieDetails: (id) =>
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
};
