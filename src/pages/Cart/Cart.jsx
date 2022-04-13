import { useDispatch, useSelector } from 'react-redux';
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
import {
   addToCart,
   clearCart,
   decreaseQuantity,
   getTotals,
   removeFromCart,
} from '../../features/cart/cartSlice';
import { useEffect } from 'react';

const Cart = () => {
   const cart = useSelector((state) => state.cart);
   const { cartItems, cartTotalAmount } = cart;

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getTotals());
   }, [cart, dispatch]);

   const removeFromCartHandler = (cartItem) => {
      dispatch(removeFromCart(cartItem));
   };

   const decreaseQuantityHandler = (cartItem) => {
      dispatch(decreaseQuantity(cartItem));
   };

   const increaseQuantityHandler = (cartItem) => {
      dispatch(addToCart(cartItem));
   };

   const clearCartHandler = () => {
      dispatch(clearCart());
   };

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
                     cartItems.map((cartItem) => {
                        const { id, name, image, desc, price, quantity } =
                           cartItem;
                        return (
                           <CartItem key={id}>
                              <CartProduct>
                                 <img src={image} alt={name} />
                                 <div>
                                    <h3>{name}</h3>
                                    <p>{desc}</p>
                                    <button
                                       onClick={() =>
                                          removeFromCartHandler(cartItem)
                                       }
                                    >
                                       Remove
                                    </button>
                                 </div>
                              </CartProduct>
                              <CartPrice>${price}</CartPrice>
                              <CartQuantity>
                                 <button
                                    onClick={() =>
                                       decreaseQuantityHandler(cartItem)
                                    }
                                 >
                                    -
                                 </button>
                                 <Count>{quantity}</Count>
                                 <button
                                    onClick={() =>
                                       increaseQuantityHandler(cartItem)
                                    }
                                 >
                                    +
                                 </button>
                              </CartQuantity>
                              <TotalPrice>${price * quantity}</TotalPrice>
                           </CartItem>
                        );
                     })}
               </CartItems>
               <CartSummary>
                  <ClearButton onClick={clearCartHandler}>
                     Clear Cart
                  </ClearButton>
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
