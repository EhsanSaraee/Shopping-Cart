import styled from 'styled-components';

export const HomeContainer = styled.section`
   padding: 2rem 4rem;

   h2 {
      font-size: 40px;
      font-weight: 400;
      text-align: center;
   }
`;

export const Products = styled.section`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   margin-top: 2rem;
`;

export const Product = styled.div`
   width: 250px;
   height: 400px;
   max-width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   margin: 1rem auto;
   padding: 1rem;
   border-radius: 15px;
   box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.5),
      2px 2px 5px rgba(94, 104, 121, 0.3);

   img {
      width: 90%;
      margin-top: 1rem;
      margin-left: auto;
      margin-right: auto;
      object-fit: cover;
   }

   h3 {
      font-size: 25px;
      font-weight: 400;
   }

   button {
      width: 100%;
      height: 40px;
      border-radius: 5px;
      margin-top: 2rem;
      font-weight: 400;
      border: none;
      outline: none;
      cursor: pointer;
      background: #4b70e2;
      color: #fff;
      letter-spacing: 1.15px;
   }
`;

export const Details = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

export const Price = styled.span`
   font-size: 20px;
   font-weight: 700;
`;
