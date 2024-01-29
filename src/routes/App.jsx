import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Items from '../components/Items';

function App() {
  return (
    <>
      <Header />
      <Items />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
