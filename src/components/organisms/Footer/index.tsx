import Container from '@mui/material/Container';

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="py-8 border-t">
        <Container>
          <p>&copy; 2023 Solid</p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
