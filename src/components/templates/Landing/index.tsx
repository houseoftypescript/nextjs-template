import { configs } from '../../../configs';
import Banner from '../../organisms/Banner';
import Footer from '../../organisms/Footer';
import Hero from '../../organisms/Hero';
import Meta from '../../organisms/Meta';
import Features from '../../organisms/Features';

export const LandingTemplate: React.FC = () => (
  <div className="antialiased text-gray-600">
    <Meta title={configs.title} description={configs.description} />
    <Hero />
    <Features />
    <Banner />
    <Footer />
  </div>
);

export default LandingTemplate;
