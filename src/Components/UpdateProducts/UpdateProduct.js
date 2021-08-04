import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button, Input } from "antd";

import styled from "styled-components";

import { app } from "../../Base";
const { TextArea } = Input;

// import { motion } from "framer-motion";

const db = app.firestore().collection("Fooditems");
function UpdateProducts({ z, title, avatar, description, price }) {
  const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,

      // border: "2px solid #000",
      backgroundImage: "linear-gradient(#4c87df, #1854b1, #2233ac)",
      backgroundColor: "#DA780C",
      color: "white",

      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      width: "50%",
      height: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
  }));
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [titles, setTitles] = useState("");
  const [photos, setPhotos] = useState(null);
  const [prices, setPrices] = useState("");
  const [descriptions, setDescriptions] = useState("");

  const ImageUpload = async (e) => {
    const File = e.target.files[0];
    const StorageRef = app.storage().ref();
    const fileRef = await StorageRef.child(File.name);
    await fileRef.put(File);
    setPhotos(await fileRef.getDownloadURL());
  };

  const updating = async () => {
    await db.doc(z).update({
      title: titles,
      avatar: photos,
      price: prices,
      description: descriptions,
    });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        style={{
          background: "#004a1e",
          color: "white",
          width: "120px",
          height: "40px",
          borderRadius: "5px",
        }}
      >
        Edit
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Container>
            <Wrapper>
              <InputText>Title</InputText>
              <Input
                placeholder={title}
                onChange={(e) => {
                  setTitles(e.target.value);
                }}
                style={{ width: "300px", margin: "10px" }}
                // placeholder="title"
              />
              <InputText>Price</InputText>
              <Input
                type="number"
                placeholder={price}
                onChange={(e) => {
                  setPrices(e.target.value);
                }}
                style={{ width: "300px", margin: "10px" }}
                // placeholder="title"
              />
              <InputText>Description</InputText>
              <TextArea
                placeholder={description}
                onChange={(e) => {
                  setDescriptions(e.target.value);
                }}
                style={{
                  resize: "none",
                  width: "300px",
                  margin: "10px",
                  height: "100px",
                  borderRadius: "5px",
                }}
              />
              <Button
                onClick={() => {
                  updating();
                  handleClose();
                }}
                type="primary"
                style={{ width: "200px", margin: "10px" }}
              >
                Update
              </Button>
            </Wrapper>
          </Container>
        </Fade>
      </Modal>
    </div>
  );
}

export default UpdateProducts;

const InputText = styled.div``;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

const Container = styled.div`
  height: 430px;
  width: 350px;
  background-color: white;
  border-radius: 10px;

  @media screen and (max-width: 600px) {
    height: 500px;
    width: 320px;
    overflow-x: scroll;
  }
`;
