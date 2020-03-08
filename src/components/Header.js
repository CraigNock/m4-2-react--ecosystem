import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';


const Header = (props) => {
    return (
        <StyledWrapper>
            <StyledTitle>Fruit Emporium</StyledTitle>
            <StyledNav>
                <StyledNavLink exact to='/'>Home</StyledNavLink>
                <StyledNavLink to='/about'>About</StyledNavLink>
            </StyledNav>
        </StyledWrapper>


    )
}

const StyledWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: whitesmoke;
    width: 100%;
`;

const StyledTitle = styled.h1`
    font-family: Arial;

`;

const StyledNav = styled.nav`

`;

const StyledNavLink = styled(NavLink)`
    display: inline-block;
    font-family: Arial;
    font-size: 1.2rem;
    padding: .25rem 0 ;
    margin: auto 2rem;
    text-decoration: none;
    color: black;
    &.active {
        color: maroon;
        border-bottom: 3px solid maroon;
    }

`;


export default Header;