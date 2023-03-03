import Footer from '../../components/organisms/Footer';
import Navbar from '../../components/organisms/Navbar';

export type LayoutTemplateProps = {
  children?: JSX.Element;
};

export const LayoutTemplate: React.FC<LayoutTemplateProps> = ({
  children = <></>,
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutTemplate;
