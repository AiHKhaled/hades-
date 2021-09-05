import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {useDispatch} from 'react-redux'
import {loadDetail} from "../actions/detailAction"

const Game = ({ name, released, image, id}) => {
  const dispatch = useDispatch()
  const loadDetailHandler=()=>{
    dispatch(loadDetail(id))
  }
  return (
    <StyledGame onClick={loadDetailHandler}>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={name} />
    </StyledGame>
  );
};
const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(255, 255, 255, 0.1);
  text-align: center;
  border-radius: 10px;
  img {
    width: 90%;
    height: 40vh;
    padding-bottom: 1rem;
    object-fit: fill;
  }
`;
export default Game;
