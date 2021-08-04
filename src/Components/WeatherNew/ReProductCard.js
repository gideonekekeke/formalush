import pick from "object.pick";
import React from "react";
import styled from "styled-components";
import pic from "../img/1.jpg";

function ReProductCard() {
  return (
    <Container>
      <Wrapper>
        <FoodText>RECENT ORDERS REQUESTED</FoodText>
        <FoodItems>
          <ItemText>FoodItem</ItemText>
          <ItemText4>Quantity</ItemText4>
          <ItemText>Price</ItemText>
        </FoodItems>
        <FoodItems1>
          <ItemText2>
            <ImageHolder src={pic} />
            <ImageText>Yam and Egg</ImageText>
          </ItemText2>
          <ItemText1>2</ItemText1>
          <ItemText1>#3000</ItemText1>
        </FoodItems1>
      </Wrapper>
    </Container>
  );
}

export default ReProductCard;

const ImageText = styled.div`
  margin-left: 10px;
  /* background-color: red; */
  width: 100px;
`;

const ImageHolder = styled.img`
  height: 30px;
  width: 30px;
  object-fit: cover;
  border-radius: 50px;
`;

const FoodItems1 = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 10px;
  border-bottom: 1px solid silver;
  padding-right: 70px;

  font-weight: 600;
  padding-top: 20px;
`;
const ItemText1 = styled.div`
  padding-left: 20px;
`;
const ItemText2 = styled.div`
  padding-left: 20px;
  display: flex;
`;
const FoodItems = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 10px;
  border-bottom: 1px solid silver;
  padding-right: 70px;

  font-weight: 600;
`;
const ItemText = styled.div`
  padding-left: 20px;
`;
const ItemText4 = styled.div`
  padding-left: 70px;
`;

const FoodText = styled.div`
  border-bottom: 1px solid silver;
  padding: 10px;
  font-weight: bold;
  padding-left: 30px;
`;

const Container = styled.div``;

const Wrapper = styled.div`
  height: 300px;
  background-color: white;
  box-shadow: 0 8px 32px 0 rgba(1, 38, 15, 0.19);
  border-radius: 5px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 600px) {
    width: 300px;
  }
`;
