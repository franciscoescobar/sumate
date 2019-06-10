import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .canvas {
    margin: 20px;
    height: 70%;
    width: 80%;
    border: 1px solid #cbcbcb;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    @media (max-width: 700px) {
      margin: 20px;
      overflow: hidden;
    }
  }
  > * > h1 {
    font-size: 24px;
    @media (max-width: 700px) {
      font-size: 16px;
    }
  }
  > * .image {
    height: 5rem;
    width: 5rem;
    @media (max-width: 700px) {
      height: 3rem;
      width: 3rem;
    }
  }
`;
