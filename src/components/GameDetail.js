import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { smallImage } from "../util";
//images
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
//stars
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

const GameDetail = ({ pathId }) => {
  const history = useHistory();

  const { screen, game, isLoading } = useSelector((state) => state.detail);
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img key={i} alt="star" src={starFull} />);
      } else {
        stars.push(<img key={i} alt="star" src={starEmpty} />);
      }
    }
    return stars;
  };
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p> Rating: {game.rating} </p>
                {getStars()}
              </div>

              <div className="info" style={{ textAlign: "center" }}>
                <h3> Platforms </h3>
                <Platforms>
                  {game.platforms.map((data) => (
                    <img
                      key={data.platform.id}
                      src={getPlatform(data.platform.name)}
                    />
                  ))}
                </Platforms>
              </div>
            </Stats>
            <Media>
              <img
                src={smallImage(game.background_image, 640)}
                alt={game.name}
              />
            </Media>
            <div className="description" style={{ margin: "5rem 0rem" }}>
              <p> {game.description_raw} </p>
            </div>
            <div className="gallery">
              {screen.results.map((result) => (
                <img
                  key={result.id}
                  src={smallImage(result.image, 640)}
                  alt="game"
                />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};
const CardShadow = styled(motion.div)`
  //  padding: 2rem;
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: #1b1b1b;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #b43d3d;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;
const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 10rem;
  background: #5a5959;
  box-shadow: 10px 15px 12px -1px rgba(255, 255, 255, 0.53);
  -webkit-box-shadow: 10px 15px 12px -1px rgba(255, 255, 255, 0.53);
  -moz-box-shadow: 10px 15px 12px -1px rgba(255, 255, 255, 0.53);
  color: white;
  position: absolute;
  left: 10%;
  img {
    width: 100%;
  }
`;
const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 1.5rem;
    height: 1.5rem;
    display: inline;
  }
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin: 3rem;
  }
`;
const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;
const Gallery = styled(motion.div)``;

export default GameDetail;
