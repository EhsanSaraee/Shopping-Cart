import { useGetAllProductsQuery } from '../../features/products/productsAPI';

const Home = () => {
   const { data } = useGetAllProductsQuery();
   console.log(data);

   return (
      <>
         <h1>Home</h1>
      </>
   );
};

export default Home;
