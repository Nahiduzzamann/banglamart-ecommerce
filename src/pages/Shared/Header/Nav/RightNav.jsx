import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #5dade2;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 999 
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <div className="p-2">
      <NavLink className="text-CardColor hover:text-TextColor" to="/flash-sell">
        <h3 className="p-2">Flash Sale</h3>
      </NavLink>
      <NavLink className="text-CardColor hover:text-TextColor" to="/all-seller">
        <h3 className="p-2">All Seller</h3>
      </NavLink>
      {/* <Link className="text-CardColor hover:text-TextColor" to="/">
        <h3 className="p-2">Affiliating</h3>
      </Link> */}
      <NavLink className="text-CardColor hover:text-TextColor" to="/category">
        <h3 className="p-2">Categories</h3>
      </NavLink>
      <NavLink className="text-CardColor hover:text-TextColor" to="/brands">
        <h3 className="p-2">Brands</h3>
      </NavLink>
      <Link className="text-CardColor hover:text-TextColor" to="/">
        <h3 className="p-2">Track Order</h3>
      </Link>
      <Link className="text-CardColor hover:text-TextColor" to="/">
        <h3 className="p-2">Contact Us</h3>
      </Link>
      </div>
    </Ul>
  );
};

export default RightNav;
