import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Cart, Home, Navbar } from './components';

const App = () => {
   return (
      <BrowserRouter>
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
         </Routes>
      </BrowserRouter>
   );
};

export default App;
