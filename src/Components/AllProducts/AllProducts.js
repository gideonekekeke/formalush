import React, { useEffect, useState } from "react";
import MainProuctsCard from "./MainProuctsCard";
import styled from "styled-components";
import { app } from "../../Base";

const db = app.firestore().collection("Fooditems");
const AllProducts = () => {
  const [data, setData] = useState([]);

  const gettingItems = async () => {
    await db.onSnapshot((snap) => {
      const i = [];
      snap.forEach((doc) => {
        i.push({ ...doc.data(), id: doc.id });
      });
      setData(i);
    });
  };

  useEffect(() => {
    gettingItems();
  }, []);

  return (
    <Holding>
      <Holder>
        {data.map((item) => (
          <MainProuctsCard key={item.id} r={item} />
        ))}
      </Holder>
    </Holding>
  );
};

export default AllProducts;

const Holder = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  /* background-color: #f4f6fc; */
`;

const Holding = styled.div`
  display: flex
 
  justify-content: center;
        align-items: center;
        width: 100%;
      
        /* height: 100vh; */
   
`;
