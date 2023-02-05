import Image from 'next/image';

export type FeatureProps = {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

export const Feature: React.FC<FeatureProps> = ({
  title,
  description,
  image,
  imageAlt,
  reverse,
}) => {
  return (
    <div
      className={`flex flex-wrap items-center ${
        reverse ? '' : 'md:flex-row-reverse'
      }`}
    >
      <div className="w-full sm:w-1/2 p-6">
        <Image src={image} alt={imageAlt} className="w-full" />
      </div>
      <div className="w-full sm:w-1/2 text-center md:text-left">
        <h3 className="text-3xl text-gray-900 font-semibold">{title}</h3>
        <div className="mt-6 text-xl leading-9">{description}</div>
      </div>
    </div>
  );
};

export default Feature;
