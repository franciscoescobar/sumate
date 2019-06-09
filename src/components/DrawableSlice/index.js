import React from "react";
import DrawableCanvas from "react-drawable-canvas";
import { Wrapper } from "./styled";
import { Link } from "react-router-dom";
const DrawableSlide = ({ title }) => (
  <Wrapper>
    <Link to="/slide/10">
      <h1>{title}</h1>
    </Link>
    <div className="canvas">
      <DrawableCanvas />
    </div>
    <Link to="/slide/10">
      <img
        className="image"
        alt="img"
        src={require("D:/GHM/form/sumate-final/src/assets/images/svg/enviar.svg")}
      />
    </Link>
  </Wrapper>
);

export default DrawableSlide;
