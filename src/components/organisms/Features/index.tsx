import React from 'react';
import { configs } from '../../../configs';
import { Section } from '../../atoms/Section';
import Feature from '../../molecules/Feature';

export const Features: React.FC = () => (
  <Section
    title="Your title here"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
  >
    {configs.features.map((feature, index) => {
      return (
        <Feature
          key={feature.id}
          title={feature.title}
          description={feature.description}
          image={feature.image}
          imageAlt={feature.imageAlt}
          reverse={index % 2 === 1}
        />
      );
    })}
  </Section>
);

export default Features;
