import { NavBag, NavBagQuantity, NavbarContainer } from './styles';
import { Link } from 'react-router-dom';
import { HandBagIcon } from '../Icons';

const Navbar = () => {
   return (
      <NavbarContainer>
         <Link to="/">
            <h2>OnlineShop</h2>
         </Link>
         <Link to="/cart">
            <NavBag>
               <HandBagIcon />
               <NavBagQuantity>
                  <span>3</span>
               </NavBagQuantity>
            </NavBag>
         </Link>
      </NavbarContainer>
   );
};

export default Navbar;
