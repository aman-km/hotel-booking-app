import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Register from './Components/Register/Register';
import Home from './Components/Home/Home';
import { HotelProvider } from './Context'; 
import Hotels from './Components/Hotels/Hotels';
import Booking from './Components/Booking/Booking';
import Footer from './Components/Footer/Footer';
import Admin from './Components/Admin/Admin';

function App() {
  return (
    <HotelProvider> 
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/hotels' element={<Hotels />}/>
          <Route path='/booking' element={<Booking />}/>
          <Route path='/admin' element={<Admin />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </HotelProvider>
  );
}

export default App;
