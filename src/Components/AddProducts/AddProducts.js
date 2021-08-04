import React, { useState } from "react";
import styled from "styled-components";
import { Input, Button, Select } from "antd";

import { app } from "../../Base";
import pic from "../img/4.jpg";
import "antd/dist/antd.css";
import TextField from "@material-ui/core/TextField";
import { Option } from "antd/lib/mentions";
const { TextArea } = Input;

const db = app.firestore().collection("Fooditems");

const AddProducts = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [data, setData] = useState("");

  const [fileUrl, setFileUrl] = useState(null);
  const [displayCover, setDisplayCover] = useState(null);

  const ImageUpload = async (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setDisplayCover(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    const File = e.target.files[0];
    const StorageRef = app.storage().ref();
    const fileRef = await StorageRef.child(File.name);
    await fileRef.put(File);
    setFileUrl(await fileRef.getDownloadURL());
  };

  const handleData = (data) => {
    setData(data);
  };

  const SendingData = async () => {
    await db.doc().set({
      title,
      description,
      price,
      data,
      avatar: await fileUrl,
    });
    setTitle("");
    setPrice("");
    setDescription("");
    setData("");
    setFileUrl("");
    setDisplayCover("");
  };

  return (
    <Container>
      <BoxHolder>
        <FirstBox>
          <HeaderTitle>ADD PRODUCTS FORM</HeaderTitle>
          <NameInputHolder>
            <NameTitle>Product Name</NameTitle>
            <Input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              style={{
                width: "440px",
                marginTop: "10px",
                height: "40px",
                borderRadius: "5px",
              }}
              placeholder="Input Name"
            />
          </NameInputHolder>
          <FieldHolder>
            <BothHolder>
              <NameTitle>Select Catagory</NameTitle>
              <Select
                // value={data}
                onChange={handleData}
                size="large"
                defaultValue="Food category"
                style={{
                  width: "200px",
                  marginTop: "10px",
                  borderRadius: "5px",
                  marginRight: "30px",
                }}
              >
                <Option value="breakfast">breakfast</Option>
                <Option value="launch">launch</Option>
                <Option value="dinner">dinner</Option>
                <Option value="all">all</Option>
              </Select>
            </BothHolder>
            <BothHolder>
              <NameTitle>Currency</NameTitle>
              <Select
                size="large"
                defaultValue="Naira"
                style={{
                  width: "200px",
                  marginTop: "10px",
                  borderRadius: "5px",
                  marginRight: "30px",
                }}
              >
                <Option value="Naira">Naira</Option>
              </Select>
            </BothHolder>
          </FieldHolder>
          <NameInputHolder>
            <NameTitle>Price</NameTitle>
            <Input
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              type="number"
              style={{
                width: "440px",
                marginTop: "10px",
                height: "40px",
                borderRadius: "5px",
              }}
              placeholder="Enter amount .0"
            />
          </NameInputHolder>
          <NameInputHolder>
            <NameTitle>Product Image</NameTitle>
            <Input
              onChange={ImageUpload}
              type="file"
              style={{
                width: "440px",
                marginTop: "10px",

                borderRadius: "5px",
              }}
              placeholder="Message"
            />
          </NameInputHolder>
          <NameInputHolder>
            <NameTitle>Description</NameTitle>
            <TextArea
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              style={{
                resize: "none",
                width: "440px",
                marginTop: "10px",
                height: "100px",
                borderRadius: "5px",
              }}
              placeholder="Message"
            />
          </NameInputHolder>
        </FirstBox>
        <SecondBox>
          <HeaderTitle>IMAGE PREVIEW</HeaderTitle>
          <ContentBody>
            {displayCover ? (
              <SecondBoxImg src={displayCover} />
            ) : (
              <SecondBoxImg src={pic} />
            )}
            <Button
              onClick={() => {
                setDisplayCover(null);
              }}
              style={{
                marginTop: "20px",
                height: "40px",
                backgroundColor: "red",
                color: "white",
                borderRadius: "5px",
              }}
            >
              Remove Image
            </Button>
            <Button
              onClick={() => {
                SendingData();
              }}
              style={{
                marginTop: "60px",
                height: "50px",
                backgroundColor: "black",
                color: "white",
                borderRadius: "5px",
                width: "230px",
              }}
            >
              Save and Add
            </Button>
          </ContentBody>
        </SecondBox>
      </BoxHolder>
    </Container>
  );
};

export default AddProducts;

const ContentBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  flex-direction: column;
`;

const SecondBoxImg = styled.img`
  height: 300px;
  width: 450px;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0px 5px 7px -2px rgba(0, 0, 0, 0.35);
`;

const BothHolder = styled.div``;

const FieldHolder = styled.div`
  /* padding-bottom: 20px; */
  padding-left: 30px;
  /* padding-top: 25px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NameInputHolder = styled.div`
  padding-bottom: 10px;
  padding-left: 30px;
  padding-top: 10px;
  /* margin-top: 20px; */
`;
const NameTitle = styled.div``;

const HeaderTitle = styled.div`
  border-bottom: 1px solid silver;
  padding-bottom: 20px;
  padding-left: 30px;
  padding-top: 20px;
  font-weight: 500;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f6fc;
  height: 100vh;
`;
const BoxHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const FirstBox = styled.div`
  height: 600px;
  width: 500px;
  background-color: white;
  box-shadow: 0px 5px 7px -2px rgba(0, 0, 0, 0.35);
  margin: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;
const SecondBox = styled.div`
  height: 600px;
  width: 500px;
  background-color: white;
  box-shadow: 0px 5px 7px -2px rgba(0, 0, 0, 0.35);
  margin: 10px;
  margin-left: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;
