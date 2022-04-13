import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cart/cartSlice';
import { useGetAllProductsQuery } from '../../features/products/productsAPI';
import { Details, HomeContainer, Price, Product, Products } from './styles';

const Home = () => {
   const { data, error, isLoading } = useGetAllProductsQuery();
   const dispatch = useDispatch();

   const addToCartHandler = (product) => {
      dispatch(addToCart(product));
   };

   return (
      <HomeContainer>
         {isLoading ? (
            <p>Loading...</p>
         ) : error ? (
            <p>An error occurred...</p>
         ) : (
            <>
               <h2>New Arrivals</h2>
               <Products>
                  {data?.map((product) => {
                     const { id, name, image, price, desc } = product;
                     return (
                        <Product key={id}>
                           <h3>{name}</h3>
                           <img src={image} alt={name} />
                           <Details>
                              <span>{desc}</span>
                              <Price>${price}</Price>
                           </Details>
                           <button onClick={() => addToCartHandler(product)}>
                              Add To Cart
                           </button>
                        </Product>
                     );
                  })}
               </Products>
            </>
         )}
      </HomeContainer>
   );
};

export default Home;
