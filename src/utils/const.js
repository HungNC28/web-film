export const IMAGE_URL = "https://image.tmdb.org/t/p/w500/";
export const BASE_URL = "https://api.themoviedb.org/3";
export const API_KEY = "b70a0e1bf5afbcd757dfd7c22dd4ef56";

export const MOVIE_INFO = [
  { label: "", url: `/discover/tv?api_key=${API_KEY}&with_network=123` },
  {
    label: "Xu hướng",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  {
    label: "Xếp hạng cao",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  {
    label: "Hành động",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  {
    label: "Hài",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  {
    label: "Kinh dị",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  {
    label: "Lãng mạn",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  {
    label: "Tài liệu",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  },
];
