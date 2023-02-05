import feature1 from '../assets/images/feature1.svg';
import feature2 from '../assets/images/feature2.svg';
import feature3 from '../assets/images/feature3.svg';

export const content = {
  site_name: 'Starter',
  title: 'Nextjs Starter',
  description: 'Starter code for your Nextjs Boilerplate with Tailwind CSS',
  locale: 'en',
  hero: {
    title: 'The modern landing page for',
    subtitle: 'React developers',
    description: 'The easiest way to build a React landing page in seconds.',
  },
  features: {
    title: 'Your title here',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at.',

    features: [
      {
        id: 1,
        title: 'Your title here',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.',
        image: feature1,
        imageAlt: 'First feature alt text',
      },
      {
        id: 2,
        title: 'Your title here',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.',
        image: feature2,
        imageAlt: 'Second feature alt text',
      },
      {
        id: 3,
        title: 'Your title here',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.',
        image: feature3,
        imageAlt: 'Third feature alt text',
      },
    ],
  },
  banner: {
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    subtitle: 'Start your Free Trial.',
  },
};
