import React from "react";
import { Link } from "react-router-dom";
import {
  Wrapper,
  Video,
  ImageWrapper,
  ButtonImage,
  LogoImage,
  SumateImage
} from "./styled";
const OceanSlide = ({ one }) => (
  <Wrapper>
    <Video loop autoPlay>
      <source
        src={require("D:/GHM/form/sumate-final/src/assets/videos/ocean.mp4")}
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </Video>
    {one ? (
      <ImageWrapper>
        <LogoImage
          alt="foto"
          src={require("D:/GHM/form/sumate-final/src/assets/images/svg/logo.svg")}
        />
        <Link to="/slide/2">
          <ButtonImage
            alt="foto"
            src={require("D:/GHM/form/sumate-final/src/assets/images/svg/boton.svg")}
          />
        </Link>
      </ImageWrapper>
    ) : (
      <ImageWrapper>
        <Link to="/slide/3">
          <SumateImage
            alt="foto"
            src={require("D:/GHM/form/sumate-final/src/assets/images/svg/sumate.svg")}
          />
        </Link>
      </ImageWrapper>
    )}
  </Wrapper>
);

export default OceanSlide;
