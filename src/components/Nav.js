import React, { useState } from "react";
//Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
//Redux and Routes
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
//import { fadeIn } from "../animations";

const Nav = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const inputHandler = (e) => {
    setText(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(text));
    setText("");
  };
  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };
  return (
    <StyledNav>
      <Logo onClick={clearSearched}>
        <img src={logo} alt="logo" />
        <h1>Ignite</h1>
      </Logo>
      <form className="search">
        <input value={text} onChange={inputHandler} type="text" />
        <button onClick={submitSearch} type="submit">
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1rem;
    padding: 0.5rem;
    border: none;
    border-radius: 2px;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }
  button {
    font-size: 1rem;
    border: none;
    padding: 0.5rem 2rem;
    margin: 1rem;
    cursor: pointer;
    border-radius: 2px;
    background: rgba(102, 202, 233, 0.72);
    color: white;
  }
`;

const Logo = styled(motion.div)`
  display: flex;

  justify-content: center;
  padding: 1rem;

  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
    //margin: 1rem;
    background-color: rgba(102, 202, 233, 0.72);
  }
`;

export default Nav;
