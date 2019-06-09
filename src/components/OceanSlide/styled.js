import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  > img {
    height: 120px;
    width: 120px;
  }
`;
export const Video = styled.video`
  position: absolute;
  z-index: -1;
`;
export const ImageWrapper = styled.div`
  display: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;
export const LogoImage = styled.img`
  height: 20rem;
  width: 20rem;
`;
export const ButtonImage = styled.img`
  margin-top: 7rem;
  height: 7rem;
  width: 7rem;
`;
export const SumateImage = styled.img`
  height: 65rem;
  width: 65rem;
`;
