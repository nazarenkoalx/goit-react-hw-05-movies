import { Container } from 'components/Container/Container';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header, Link } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Link to="/">Home</Link>
        <Link to="/movies"> Movies</Link>
      </Header>
      <Outlet />
      <ToastContainer />
    </Container>
  );
};

export default SharedLayout;
