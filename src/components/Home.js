import React from 'react';
import styled from 'styled-components';
import {items} from '../data';
import ListingGrid from './ListingGrid'

let saleItems = Object.values(items);


const HomePage = (props) => {
    return(
        <>
        <StyledP>
            Fruit emporium sells the finest fruits from this world and beyond.
        </StyledP>
        <StyledP>
            <span>Browse items:</span>
        </StyledP>
        <ListingGrid items={saleItems} />
        </>
    )
}


const StyledP = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    margin: 1rem 2rem;
    
    span {
        font-weight: bold;
    }
`;


export default HomePage;