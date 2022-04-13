import { useSelector } from 'react-redux';
import {
   CardContainer,
   CardEmpty,
   CartItem,
   CartItems,
   CartPrice,
   CartProduct,
   CartQuantity,
   Count,
   Price,
   ProductTitle,
   Quantity,
   StartShopping,
   Titles,
   Total,
   TotalPrice,
   Amount,
   CartCheckout,
   CartSummary,
   ClearButton,
   ContinueShopping,
   SubTotal,
} from './styles';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '../../components/Icons';

const Cart = () => {
   const { cartItems, cartTotalAmount } = useSelector((state) => state.cart);

   return (
      <CardContainer>
         <h2>Shopping Cart</h2>
         {cartItems.length === 0 ? (
            <CardEmpty>
               <p>Your car is currently empty</p>
               <StartShopping>
                  <Link to="/">
                     <ArrowLeftIcon />
                     <span>Start Shopping</span>
                  </Link>
               </StartShopping>
            </CardEmpty>
         ) : (
            <>
               <Titles>
                  <ProductTitle>Product</ProductTitle>
                  <Price>Price</Price>
                  <Quantity>Quantity</Quantity>
                  <Total>Total</Total>
               </Titles>
               <CartItems>
                  {cartItems &&
                     cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id}>
                           <CartProduct>
                              <img src={cartItem.image} alt={cartItem.name} />
                              <div>
                                 <h3>{cartItem.name}</h3>
                                 <p>{cartItem.desc}</p>
                                 <button>Remove</button>
                              </div>
                           </CartProduct>
                           <CartPrice>${cartItem.price}</CartPrice>
                           <CartQuantity>
                              <button>-</button>
                              <Count>{cartItem.quantity}</Count>
                              <button>+</button>
                           </CartQuantity>
                           <TotalPrice>
                              ${cartItem.price * cartItem.quantity}
                           </TotalPrice>
                        </CartItem>
                     ))}
               </CartItems>
               <CartSummary>
                  <ClearButton>Clear Cart</ClearButton>
                  <CartCheckout>
                     <SubTotal>
                        <span>Subtotal</span>
                        <Amount>${cartTotalAmount}</Amount>
                     </SubTotal>
                     <p>Taxes and shipping calculated at checkout</p>
                     <button>Check out</button>
                     <ContinueShopping>
                        <Link to="/">
                           <ArrowLeftIcon />
                           <span>Continue Shopping</span>
                        </Link>
                     </ContinueShopping>
                  </CartCheckout>
               </CartSummary>
            </>
         )}
      </CardContainer>
   );
};

export default Cart;
