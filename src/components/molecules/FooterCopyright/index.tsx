import { configs } from '../../../configs';

const FooterCopyright = () => (
  <div className="footer-copyright">
    © Copyright {new Date().getFullYear()} {configs.title}. Powered with{' '}
    <span role="img" aria-label="Love">
      ♥
    </span>{' '}
    by{' '}
    <a
      href="https://creativedesignsguru.com"
      className="text-primary-500 hover:underline"
    >
      CreativeDesignsGuru
    </a>
  </div>
);

export { FooterCopyright };
