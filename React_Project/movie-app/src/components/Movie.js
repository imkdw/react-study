import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Movie = ({ id, coverImg, title, summary, genres }) => {
  return (
    <div>
      <img src={coverImg} alt={title + ' Cover Image'} />
      <Link to={`/movie/${id}`}>
        <h2>{title}</h2>
      </Link>
      <p>{summary.lenght < 200 ? summary : summary.slice(0, 200) + '...'}</p>
      <ul>
        {genres.map(g => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.prototype = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
