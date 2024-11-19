import HeroSection from '../components/HeroSection';
import Ppcp from '../components/Ppcp';
import WelcomeSection from '../components/WelcomeSection';

const Home = () => {
  return (
    <div className="text-center py-20">
      <HeroSection />
      <WelcomeSection />
      <Ppcp />
    </div>
  );
};

export default Home;
