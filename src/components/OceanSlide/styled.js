import styled from "styled-components";
import Switch from "react-ios-switch";
export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  z-index: 2;
  justify-content: center;
  background-size: cover;
  > img {
    height: 120px;
    width: 120px;
  }
`;
export const Video = styled.video`
  position: fixed;
`;
export const ImageWrapper = styled.div`
  display: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;
export const LogoImage = styled.img`
  height: 20rem;
  width: 20rem;
  @media (max-width: 700px) {
    height: 10rem;
    width: 10rem;
  }
`;
export const ButtonImage = styled.img`
  margin-top: 7rem;
  height: 7rem;
  width: 7rem;
  @media (max-width: 700px) {
    height: 5rem;
    width: 5rem;
  }
`;
export const SumateImage = styled.img`
  height: 65rem;
  width: 65rem;
  @media (max-width: 700px) {
    height: 30rem;
    width: 30rem;
  }
`;
export const StyledSwitch = styled(Switch)`
  margin-top: 30px;
`;
