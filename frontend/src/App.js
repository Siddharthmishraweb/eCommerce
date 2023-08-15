import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from '../src/screens/HomeScreen';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from 'react-router-dom'


const App = () => {
  return (
     <>
        <Header/>
        <main className='py-3'>
          <Container>
            {/* <h1> Welcome to ProShop </h1> */}
            <Outlet />
          </Container>
        </main>
        <Footer />
        <ToastContainer />
     </>
  );
}

export default App;
