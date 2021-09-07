import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";
import { smallImage } from "../util";

const Game = ({ name, released, image, id }) => {
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));

    //console.log(typeof newId);
  };
  //
  return (
    <StyledGame onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <motion.img src={image} alt={name} />
      </Link>
    </StyledGame>
  );
};
const StyledGame = styled(motion.div)`
  background-color: rgba(102, 202, 233, 0.72);
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(255, 255, 255, 0.1);
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  h3 {
    color: black;
  }
  p {
    color: black;
  }
  img {
    width: 100%;
    height: 40vh;

    object-fit: cover;
  }
`;

export default Game;
