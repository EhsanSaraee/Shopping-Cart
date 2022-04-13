import styled, { css } from 'styled-components';

const GridTitle = css`
   display: grid;
   align-items: center;
   grid-template-columns: 3fr 1fr 1fr 1fr;
   column-gap: 0.5rem;
`;

const ShoppingLink = css`
   color: gray;
   text-decoration: none;
   display: flex;
   align-items: center;
`;

export const CardContainer = styled.section`
   padding: 2rem 4rem;

   h2 {
      font-size: 30px;
      font-weight: 400;
      text-align: center;
   }
`;

export const CardEmpty = styled.section`
   font-size: 20px;
   margin-top: 2rem;
   color: rgb(84, 84, 84);
   display: flex;
   flex-direction: column;
   align-items: center;
`;

export const StartShopping = styled.div`
   margin-top: 1rem;

   a {
      ${ShoppingLink}

      span {
         margin-left: 0.5rem;
      }
   }
`;

export const Titles = styled.section`
   margin: 2rem 0 1rem 0;
   ${GridTitle}

   h3 {
      font-size: 14px;
      font-weight: 400;
      text-transform: uppercase;
   }
`;

export const ProductTitle = styled.h3`
   padding-left: 0.5rem;
`;

export const Price = styled.h3``;

export const Quantity = styled.h3``;

export const Total = styled.h3`
   padding-right: 0.5rem;
   justify-self: right;
`;

export const CartItems = styled.section``;

export const CartItem = styled.div`
   border-top: 1px solid rgb(187, 187, 187);
   padding: 1rem 0;
   ${GridTitle}
`;

export const CartProduct = styled.div`
   display: flex;

   img {
      width: 150px;
      max-width: 100%;
      margin-right: 1rem;
   }

   h3 {
      font-weight: 400;
   }

   button {
      border: none;
      outline: none;
      margin-top: 0.7rem;
      background: none;
      cursor: pointer;
      color: gray;

      &:hover {
         color: black;
      }
   }
`;

export const CartPrice = styled.div``;

export const CartQuantity = styled.div`
   display: flex;
   align-items: flex-start;
   justify-content: center;
   width: 130px;
   max-width: 100%;
   border: 0.5px solid rgb(177, 177, 177);
   border-radius: 5px;

   button {
      border: none;
      outline: none;
      background: none;
      padding: 0.7rem 1.5rem;
      cursor: pointer;
   }
`;

export const Count = styled.div`
   padding: 0.7rem 0;
`;

export const TotalPrice = styled.div`
   padding-right: 0.5rem;
   justify-self: right;
   font-weight: 700;
`;

export const CartSummary = styled.section`
   display: flex;
   justify-content: space-between;
   align-items: flex-start;
   border-top: 1px solid rgb(187, 187, 187);
   padding-top: 2rem;
`;

export const ClearButton = styled.button`
   width: 130px;
   height: 40px;
   border-radius: 5px;
   font-weight: 400;
   letter-spacing: 1.15px;
   border: 0.5px solid rgb(177, 177, 177);
   color: gray;
   background: none;
   outline: none;
   cursor: pointer;
`;

export const CartCheckout = styled.section`
   width: 270px;
   max-width: 100%;

   p {
      font-size: 14px;
      font-weight: 200;
      margin: 0.5rem 0;
   }

   button {
      width: 100%;
      height: 40px;
      border-radius: 5px;
      font-weight: 400;
      letter-spacing: 1.15px;
      background-color: #4b70e2;
      color: #f9f9f9;
      border: none;
      outline: none;
      cursor: pointer;
   }
`;

export const SubTotal = styled.div`
   display: flex;
   justify-content: space-between;
   font-size: 20px;
`;

export const Amount = styled.span`
   font-weight: 700;
`;

export const ContinueShopping = styled.div`
   margin-top: 1rem;

   a {
      ${ShoppingLink}

      span {
         margin-left: 0.5rem;
      }
   }
`;
