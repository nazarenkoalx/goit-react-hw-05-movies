import { TrendingMovies } from 'components/TrendingMovies/TrendingMovies';
import { Title } from 'components/Title/Title';

const Home = () => {
  return (
    <main>
      <Title> Trending movies, last week:</Title>
      <TrendingMovies />
    </main>
  );
};

export default Home;
