import React from "react";
import { Wrapper } from "./styled";
import { Link } from "react-router-dom";
const PurpleSlide = ({ number }) => (
  <Link to={number !== 10 ? `/slide/${number + 1}` : "/"}>
    {number === 3 ? (
      <Wrapper>
        <img
          alt="mano"
          src={require("D:/GHM/form/sumate-final/src/assets/images/svg/mano.svg")}
        />
        <h1>Hola</h1>
        <p>Estas interactuando con Anchipurac.</p>
      </Wrapper>
    ) : null}
    {number === 4 ? (
      <Wrapper>
        <img
          alt="huella"
          src={require("D:/GHM/form/sumate-final/src/assets/images/svg/huella.svg")}
        />
        <h1>Dejanos tu huella</h1>
        <p>Posiciona tu dedo</p>
      </Wrapper>
    ) : null}
    {number === 10 ? (
      <Wrapper>
        <img
          alt="finalizado"
          src={require("D:/GHM/form/sumate-final/src/assets/images/svg/finalizado.svg")}
        />
        <h1>Gracias</h1>
        <p>
          Por compartir tu experiencia con Anchipurac. Ahora sos nuestro{" "}
          <strong>soicio comprometido</strong> con el ciudado del ambiente.
        </p>
      </Wrapper>
    ) : null}
  </Link>
);

export default PurpleSlide;
