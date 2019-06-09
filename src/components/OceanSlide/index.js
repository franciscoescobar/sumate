import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  Wrapper,
  Video,
  ImageWrapper,
  LogoImage,
  SumateImage,
  StyledSwitch
} from "./styled";
const OceanSlide = ({ one, history }) => {
  const [checked, setChecked] = useState(false);
  const handleSwitch = () => {
    setChecked(!checked);
    window.setTimeout(() => {
      history.push("/slide/2");
    }, 500);
  };
  return (
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

          <StyledSwitch checked={checked} onChange={handleSwitch} />
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
};

export default withRouter(OceanSlide);
