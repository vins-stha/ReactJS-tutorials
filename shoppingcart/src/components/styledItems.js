import styled from "styled-components";

export const CartButton = styled.button`
    font-size:1em;
    color:var(--mainBlue);
    margin:0.5rem;
    padding:0.25rem 1rem;
    text-transform:capitalize;
    background:var(--lightBlue);
   &: hover{
        background:var(--mainWhite);
    }
` ;

export const Navbar = styled.nav`
    background:var(--mainBlue);
    className="navbar navbar-inverse bg-primary navbar-dark"
 
` ;
