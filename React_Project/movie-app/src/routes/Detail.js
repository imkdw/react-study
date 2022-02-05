import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  }

  useEffect(() => {
    getMovie();
  }, []);

  const { medium_cover_image, genres, title, url, year, description_full, rating } = movie;

  return (
    <div>
      <img src={medium_cover_image} alt="cover" />
      <a href={url} target="_blank" rel="noreferrer">{title}</a>
      <div>출시년도 : {year}</div>
      <div>줄거리 : {description_full}</div>
      {genres && <div>장르 : {genres.map(g => (
        <span key={g}>{g}, </span>
      ))}</div>}
      <div>평점 : {rating}</div>
    </div>
  )
};

export default Detail;
