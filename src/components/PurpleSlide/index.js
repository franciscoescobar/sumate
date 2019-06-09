import React from "react";
import { Wrapper } from "./styled";
import { Link, withRouter } from "react-router-dom";
const PurpleSlide = ({ number, history }) => {
  window.setTimeout(() => {
    if (number === 3) {
      history.push("/slide/4");
    }
  }, 4000);
  return (
    <>
      {number === 3 ? (
        <Link to={number !== 10 ? `/slide/${number + 1}` : "/sumate"}>
          <Wrapper>
            <img
              alt="mano"
              className="hand"
              src={require("D:/GHM/form/sumate-final/src/assets/images/svg/mano.svg")}
            />
            <h1>Hola</h1>
            <p>Estas interactuando con Anchipurac.</p>
          </Wrapper>
        </Link>
      ) : null}
      {number === 4 ? (
        <Wrapper>
          <Link to={`/slide/${number + 1}`}>
            <img
              alt="huella"
              src={require("D:/GHM/form/sumate-final/src/assets/images/svg/huella.svg")}
            />
          </Link>
          <h1>Dejanos tu huella</h1>
          <p>Posiciona tu dedo</p>
        </Wrapper>
      ) : null}
      {number === 10 ? (
        <Link to={number !== 10 ? `/slide/${number + 1}` : "/sumate"}>
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
        </Link>
      ) : null}
    </>
  );
};

export default withRouter(PurpleSlide);
