import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #030303;
`;
export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  height: 350px;
  width: 65%;
  padding: 3rem;
  > h1 {
    color: #030303;
  }
  > li {
    display: flex;
    align-items: center;
    padding: 20px;
    flex-basis: 18rem;
  }
  > li > input {
    height: 30px;
    width: 30px;
    border: 1px solid #747474;
    font-size: 30px;
  }
  > li > span {
    font-size: 18px;
    margin-left: 10px;
  }
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
  height: 0.7rem;
  width: 0.7rem;
`;
export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: black;
  height: 480px;
  flex-wrap: wrap;
  > * > img {
    height: 10rem;
    width: 10rem;
  }
  > p {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 300;
  }
`;
