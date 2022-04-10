import styled from 'styled-components';

export const NavbarContainer = styled.nav`
   height: 70px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 0 4rem;
   background: #000;

   h2 {
      font-size: 40px;
   }
`;

export const NavBag = styled.div`
   display: flex;
   align-items: center;
`;

export const NavBagQuantity = styled.span`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 25px;
   height: 25px;
   background: yellow;
   border-radius: 50%;
   font-size: 14px;
   font-weight: 700;
   color: #000;
   margin-left: 0.3rem;
`;
