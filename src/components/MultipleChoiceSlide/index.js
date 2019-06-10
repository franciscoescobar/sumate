import React from "react";
import { Wrapper, List, Dots, Dot, ImageWrapper } from "./styled";
import { Link } from "react-router-dom";
const MultipleChoiceSlide = ({ number, title, checkboxs, onActiveChange }) => {
  const handleOnCheckboxClick = name => {
    onActiveChange(name);
  };
  return (
    <Wrapper>
      <Link to={`/slide/${number + 1}`}>
        <h1>{title}</h1>
      </Link>
      {number !== 8 ? (
        <List>
          {checkboxs.map(checkbox => (
            <li
              key={checkbox.span}
              className={
                checkbox.span === "Tu energía hace la diferencia" ||
                checkbox.span === "Somos naturaleza"
                  ? "last-item"
                  : ""
              }
            >
              <div
                name={checkbox.span}
                className={checkbox.active ? "checkbox active" : "checkbox"}
                onClick={() => handleOnCheckboxClick(checkbox.span)}
              />
              <span>{checkbox.span}</span>
            </li>
          ))}
        </List>
      ) : (
        <ImageWrapper>
          <Link to={`/slide/${number + 1}`}>
            <img
              alt="lapiz"
              src={require("D:/GHM/form/sumate-final/src/assets/images/svg/lapiz.svg")}
            />
          </Link>
          <p>
            Con el lápiz digital deja tu mensaje o ilustración en esta pantalla.
          </p>
        </ImageWrapper>
      )}

      <Dots>
        <Link to={`/slide/5`}>
          <Dot className={number === 5 ? "selected" : ""} />
        </Link>
        <Link to={`/slide/6`}>
          <Dot className={number === 6 ? "selected" : ""} />
        </Link>
        <Link to={`/slide/7`}>
          <Dot className={number === 7 ? "selected" : ""} />
        </Link>
        <Link to={`/slide/8`}>
          <Dot className={number === 8 ? "selected" : ""} />
        </Link>
      </Dots>
    </Wrapper>
  );
};

export default MultipleChoiceSlide;
