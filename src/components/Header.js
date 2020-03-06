import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


const Header = (props) => {
    return (
        <StyledWrapper>
            <StyledTitle>Fruit Emporium</StyledTitle>
            <StyledNav>
                <StyledLink to='/'>Home</StyledLink>
                <StyledLink to='/about'>About</StyledLink>
            </StyledNav>
        </StyledWrapper>


    )
}

const StyledWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: whitesmoke;

`;

const StyledTitle = styled.h1`
    font-family: Arial;

`;

const StyledNav = styled.nav`

`;

const StyledLink = styled(Link)`
    display: inline-block;
    font-family: Arial;
    font-size: 1.2rem;
    padding: 1rem;
    text-decoration: none;
    color: black;

`;


export default Header;