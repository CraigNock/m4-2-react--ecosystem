import React from 'react';
import styled from 'styled-components';
import {items, sellers} from '../data';
import {useParams} from 'react-router-dom';

let saleItems = Object.values(items);



const ItemDetails = () => {
    const { itemId } = useParams();
    let pageItem = saleItems.find(item => item.id === itemId);
    let seller = sellers[`${pageItem.sellerId}`];
    let buttonText = '';
    pageItem.quantity ? buttonText = `$${pageItem.price} - Buy now` :buttonText = 'Out of stock';
        
    
    return (
        <StyledBox>
            <StyledImg src={pageItem.imageSrc} alt={pageItem.name}/>
            <StyledInfo>
                <StyledTitle>
                    <h1>{pageItem.name}</h1>
                    <p>{pageItem.latinName}</p>
                </StyledTitle>
                <p>{pageItem.description}</p>
                <StyledOrigin>
                    Product of <span>{pageItem.countryOfOrigin}</span>
                </StyledOrigin>
                <StyledButton>{buttonText}</StyledButton>
                <StyledSeller>
                    <StyledAvatar src={seller.avatarSrc} alt={pageItem.sellerId}/>
                    <p>Sold By: <span>{seller.storeName}</span></p>
                </StyledSeller>
            </StyledInfo>
        </StyledBox>
    )
};

const StyledBox = styled.div`
    display: flex;
    width: 80vw;
    height: 70vh;
    margin: 4rem auto;
    font-family: Arial, Helvetica, sans-serif;
`;

const StyledImg = styled.img`
    border-radius: 15px;
    height: 100%;
    margin-right: 3rem;
`;

const StyledTitle = styled.div`
    margin-bottom: 2rem;
    h1 {margin-bottom: 0;}
    p {
        font-style: italic;
        margin-top: 0;
    };
`;

const StyledInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    span {
        font-weight: bold;
    }
`;

const StyledOrigin = styled.p`
    font-style: italic;
`;

const StyledButton = styled.button`
    border-radius: 10px;
    border: none;
    background-color: blue;
    color: white;
    height: 4rem;
    width: 18rem;
    font-size: 1.5rem;
    margin: 4rem 0;
    
`;

const StyledSeller = styled.div`
    display: flex;
    align-items: center;
    p {
        margin: 0 1rem;
    }
    
`;



const StyledAvatar = styled.img`
    width: 3rem;
    height: 3rem;
    border-radius: 50px;
`;



export default ItemDetails;