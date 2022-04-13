import { NavBag, NavBagQuantity, NavbarContainer } from './styles';
import { Link } from 'react-router-dom';
import { HandBagIcon } from '../Icons';
import { useSelector } from 'react-redux';

const Navbar = () => {
   const { cartTotalQuantity } = useSelector((state) => state.cart);

   return (
      <NavbarContainer>
         <Link to="/">
            <h2>OnlineShop</h2>
         </Link>
         <Link to="/cart">
            <NavBag>
               <HandBagIcon />
               <NavBagQuantity>
                  <span>{cartTotalQuantity}</span>
               </NavBagQuantity>
            </NavBag>
         </Link>
      </NavbarContainer>
   );
};

export default Navbar;
