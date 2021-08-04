import { Button } from "antd";
import React from "react";
import styled from "styled-components";
import pic from "../img/1.jpg";
import "antd/dist/antd.css";

import { app } from "../../Base";
import UpdateProducts from "../UpdateProducts/UpdateProduct";

const db = app.firestore().collection("Fooditems");

const MainProuctsCard = ({ r }) => {
  const removeTask = async () => {
    await db.doc(r.id).delete();
  };
  return (
    <>
      <ContainerCard>
        <CardImg src={r.avatar} />
        <TextHolder>
          <TextTitle>{r.title}</TextTitle>
          <TextPrice>#{r.price}</TextPrice>
        </TextHolder>
        <QtyHolder>
          <TextQty>Qty : 3</TextQty>
          <Button
            style={{
              borderColor: "#c0de8a",
              color: "black",
              marginRight: "5px",
              borderRadius: "5px",
              height: "30px",
              width: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              fontSize: "13px",
            }}
          >
            In Stock
          </Button>
        </QtyHolder>
        <Descript> {r.description}</Descript>
        <ButtonHolder>
          <Button
            onClick={() => {
              removeTask(r.id);
              console.log(r.id);
            }}
            style={{
              background: "red",
              color: "white",
              width: "120px",
              height: "40px",
              borderRadius: "5px",
            }}
          >
            Remove
          </Button>
          <UpdateProducts
            description={r.description}
            price={r.price}
            avatar={r.avatar}
            title={r.title}
            z={r.id}
          />
        </ButtonHolder>
      </ContainerCard>
    </>
  );
};

export default MainProuctsCard;

const ButtonHolder = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 10px;
`;
const Descript = styled.div`
  font-size: 13px;
  margin-left: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  -webkit-box-orient: vertical;
`;

const QtyHolder = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  margin-left: 10px;
`;
const TextQty = styled.div`
  color: gray;
`;

const TextHolder = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  margin: 10px;
`;
const TextTitle = styled.div`
  font-weight: bold;
`;
const TextPrice = styled.div``;

const CardImg = styled.img`
  height: 150px;
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const ContainerCard = styled.div`
  /* height: 320px; */
  width: 270px;
  box-shadow: 0px 5px 7px -2px rgba(0, 0, 0, 0.35);
  margin: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
`;
