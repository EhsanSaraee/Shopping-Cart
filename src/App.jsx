import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components';
import { Cart, Home, NotFound } from './pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
   return (
      <BrowserRouter>
         <ToastContainer />
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
      </BrowserRouter>
   );
};

export default App;
