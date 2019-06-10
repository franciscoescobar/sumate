import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import image from "../../assets/images/background/AGUA-SUMATE.jpg";

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
    document.body.requestFullscreen();

    window.setTimeout(() => {
      history.push("/slide/2");
    }, 500);
  };
  window.setTimeout(() => {
    if (!one) {
      history.push("/slide/3");
    }
  }, 3000);
  return (
    <Wrapper style={{ background: `url(${image})` }}>
      <Video loop autoPlay playsInline muted>
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
          <SumateImage
            alt="foto"
            src={require("D:/GHM/form/sumate-final/src/assets/images/svg/sumate.svg")}
          />
        </ImageWrapper>
      )}
    </Wrapper>
  );
};

export default withRouter(OceanSlide);
