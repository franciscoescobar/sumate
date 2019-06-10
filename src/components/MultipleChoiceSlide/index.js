import React from "react";
import { Wrapper, List, Dots, Dot, ImageWrapper, Arrow } from "./styled";
import { Link, withRouter } from "react-router-dom";
const MultipleChoiceSlide = ({
  number,
  title,
  checkboxs,
  onActiveChange,
  onClearCheckboxes,
  history
}) => {
  const handleOnCheckboxClick = name => {
    onActiveChange(name);
  };
  const clearCheckboxes = () => {
    onClearCheckboxes();
  };
  const onArrowClick = () => {
    const somethingChecked = checkboxs.filter(
      checkbox => checkbox.active === true
    );
    if (somethingChecked.length > 0) {
      history.push(`/slide/${number + 1}`);
    }
  };
  return (
    <Wrapper>
      <h1>{title}</h1>
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
          <Link to={`/slide/${number + 1}`} onClick={clearCheckboxes}>
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
      {number !== 8 && (
        <Arrow onClick={onArrowClick}>
          <i class="fas fa-chevron-right" />
        </Arrow>
      )}

      <Dots>
        <Dot className={number === 5 ? "selected" : ""} />
        <Dot className={number === 6 ? "selected" : ""} />
        <Dot className={number === 7 ? "selected" : ""} />
        <Dot className={number === 8 ? "selected" : ""} />
      </Dots>
    </Wrapper>
  );
};

export default withRouter(MultipleChoiceSlide);
