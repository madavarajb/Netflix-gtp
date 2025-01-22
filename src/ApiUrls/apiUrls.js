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
  getTrendingMovies: "https://api.themoviedb.org/3/movie/popular?page=1",
  getVideos: "https://api.themoviedb.org/3/movie/939243/videos?language=en-US",
  getVideoss: (movieId) =>
    `https://api.themoviedb.org/3/movie/${movieId}/videos`,
};
