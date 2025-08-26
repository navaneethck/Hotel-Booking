import { Header } from '../components/homeComponents/Header';
import { SearchBar } from '../components/homeComponents/SearchBar';
import { TopHotels } from '../components/homeComponents/TopHotels';
import { Offers } from '../components/homeComponents/Offers';
import { TrendingDestinations } from '../components/homeComponents/TrendingDestination';
import { Footer } from '../components/homeComponents/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <TopHotels />
      <Offers />
      <TrendingDestinations />
      <Footer />
    </div>
  );
};

export default Home;
