import React from 'react';
import styled from 'styled-components';
import {items, sellers} from '../data';
import {useParams} from 'react-router-dom';

let saleItems = Object.values(items);



const ItemDetails = () => {
    const { itemId } = useParams();
    let pageItem = saleItems.find(item => item.id === itemId);
    let seller = sellers[`${pageItem.sellerId}`];
    return (
        <StyledBox>
            <StyledImg src={pageItem.imageSrc} alt={pageItem.name}/>
            <StyledInfo>
                <div>
                    <h1>{pageItem.name}</h1>
                    <p>{pageItem.latinName}</p>
                </div>
                <p>{pageItem.description}</p>
                <p>Product of {pageItem.countryOfOrigin}</p>
                <StyledButton>${pageItem.price} - Buy now</StyledButton>
                <div>
                    <StyledAvatar src={seller.avatarSrc} alt={pageItem.sellerId}/>
                    <span>Sold By: {seller.storeName}</span>
                </div>
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

const StyledInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const StyledButton = styled.button`
    
`;

const StyledAvatar = styled.img`
    width: 3rem;
    height: 3rem;
    border-radius: 50px;
`;



export default ItemDetails;