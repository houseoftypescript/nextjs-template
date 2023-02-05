import { content } from '../../../content';
import CTA from '../../organisms/CTA';
import Features from '../../organisms/Features';
import Footer from '../../organisms/Footer';
import Hero from '../../organisms/Hero';
import Meta from '../../organisms/Meta';

export const LandingTemplate: React.FC = () => (
  <div className="antialiased text-gray-600">
    <Meta title={content.title} description={content.description} />
    <Hero
      title={content.hero.title}
      subtitle={content.hero.subtitle}
      description={content.hero.description}
    />
    <Features
      title={content.features.title}
      description={content.features.description}
      features={content.features.features}
    />
    <CTA title={content.banner.title} subtitle={content.banner.subtitle} />
    <Footer title={content.title} />
  </div>
);

export default LandingTemplate;
