import { BASE_URL, API_KEY, IMAGE_URL } from "../../utils/const";
import React, { useState, useEffect } from "react";

import classes from "./MovieDetail.module.css";
import Video from "../Video";

// render thông tin từng bộ phim
const MovieDetail = ({ movie }) => {
  const [video, setVideo] = useState({});

  const getMovie = async (id) => {
    const url = BASE_URL + `/movie/${id}/videos?api_key=${API_KEY}`;
    try {
      const result = await fetch(url);
      const respone = await result.json();
      setVideo(respone.results[0]);
    } catch (err) {}
  };

  useEffect(() => {
    if (!movie || !movie.id) return;
    getMovie(movie.id);
  }, [movie]);
  return (
    <div className={classes.MovieDetailContainer}>
      <div className={classes.MovieInfo}>
        <h1 className={classes.MovieTitle}>{movie.title || movie.name}</h1>
        <p className={classes.releaseDate}>
          Release Date: {movie.release_date}
        </p>
        <p className={classes.vote}>Vote: {movie.vote_average}/10</p>
        <p className={classes.overview}>{movie.overview}</p>
      </div>
      <div className={classes.MovieVideo}>
        {/* nếu k có video thì hiện backdrop */}
        {video?.key ? (
          <Video videoId={video.key}></Video>
        ) : (
          <img src={`${IMAGE_URL}${movie.backdrop_path}`} alt="" />
        )}
      </div>
    </div>
  );
};

export default MovieDetail;
