import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


const ListingGrid = (props) => {
    console.log(props.items);
    let items = props.items;
    return(
        <StyledItemGrid>
            {items.map(item => {
                return (
                <StyledItemBox key={item.id}>
                    <StyledLink to={`/items/${item.id}`}>
                        <StyledImg src={item.imageSrc} alt={item.name} />
                        <h3>{item.name}</h3>
                        <div></div>
                        <p>{item.latinName}</p>
                    </StyledLink> 
                </StyledItemBox>
                )
            })}
        </StyledItemGrid>
    )
    
};


const StyledLink = styled(Link)`
    text-decoration: none;
    text-align: center;
    color: black;
`;

const StyledItemGrid = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 80vw;
    background-color: white;
    margin: 0 auto;

`;

const StyledImg = styled.img`
    width: 160px;
    height: 160px;
    border-radius: 5px;
`;

const StyledItemBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 5px 10px 10px #888888;
    border-radius: 5px;
    padding: 2rem;
    background-color: whitesmoke;
    margin: 2rem ;
    width: 10rem;
    font-family: Arial, Helvetica, sans-serif;

    p {
        font-style: italic;
    }

    div {
        width: 3rem;
        height: 3px;
        background-color: lightgray;
        margin: 0 auto;
    }
`;





ListingGrid.propTypes = {
    itemList: PropTypes.arrayOf(
        PropTypes.shape({
        name: PropTypes.string.isRequired,
        latinName: PropTypes.string.isRequired,
        imageSrc: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ListingGrid;