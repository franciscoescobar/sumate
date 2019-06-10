import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #030303;
  > h1 {
    @media (max-width: 700px) {
      font-size: 16px;
    }
  }
`;
export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 60%;
  width: 80%;
  padding: 3rem;
  @media (max-width: 700px) {
    padding: 1rem;
    width: 90%;
  }
  @media (max-width: 1520px) {
    padding: 1rem;
    width: 90%;
  }
  .last-item {
    justify-self: flex-start;
  }
  > li {
    display: flex;
    align-items: center;
    flex-basis: 25rem;
    justify-content: center;
    @media (max-width: 700px) {
      padding: 5px;
      flex-basis: 7rem;
    }
  }
  > li > .checkbox {
    height: 50px;
    width: 50px;
    border: 1px solid #747474;

    @media (max-width: 1520px) {
      height: 40px;
      width: 40px;
    }
    @media (max-width: 700px) {
      height: 30px;
      width: 30px;
    }
  }
  > li > .active {
    background: url("data:image/png;base64,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");
    background-size: cover;
  }
  > li > span {
    font-size: 24px;
    width: 50%;
    margin-left: 10px;

    @media (max-width: 1520px) {
      font-size: 18px;
    }
    @media (max-width: 700px) {
      font-size: 10px;
    }
  }
`;
export const Arrow = styled.div`
  height: 2rem;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  border: 1px solid #cbcbcb;
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;
export const Dots = styled.div`
  display: flex;
  .selected {
    border: 1px solid black;
  }
`;
export const Dot = styled.div`
  background-color: #cbcbcb;
  border-radius: 50%;
  margin: 0 1rem;
  height: 1rem;
  width: 1rem;

  @media (max-width: 1520px) {
    height: 0.85rem;
    width: 0.85rem;
  }
  @media (max-width: 700px) {
    height: 0.7rem;
    width: 0.7rem;
  }
`;
export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: black;
  height: 78%;
  flex-wrap: wrap;

  > * > img {
    height: 10rem;
    width: 10rem;
    border: 1px solid #cbcbcb;
    border-radius: 3px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

    @media (max-width: 700px) {
      height: 5rem;
      width: 5rem;
    }
  }
  > p {
    margin-top: 3rem;
    font-size: 1.5rem;
    font-weight: 300;
    @media (max-width: 700px) {
      font-size: 0.75rem;
    }
  }
`;
