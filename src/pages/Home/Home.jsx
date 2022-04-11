import { useGetAllProductsQuery } from '../../features/products/productsAPI';
import { Details, HomeContainer, Price, Product, Products } from './styles';

const Home = () => {
   const { data, error, isLoading } = useGetAllProductsQuery();

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
                  {data?.map(({ id, name, image, price, desc }) => (
                     <Product key={id}>
                        <h3>{name}</h3>
                        <img src={image} alt={name} />
                        <Details>
                           <span>{desc}</span>
                           <Price>{price}</Price>
                        </Details>
                        <button>Add To Cart</button>
                     </Product>
                  ))}
               </Products>
            </>
         )}
      </HomeContainer>
   );
};

export default Home;
