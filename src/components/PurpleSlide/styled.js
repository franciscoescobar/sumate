import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(#833582, #351335);
  color: white;
  flex-wrap: wrap;
  > img {
    height: 10rem;
    width: 10rem;
  }
  > h1 {
    margin: 0;
    font-size: 4rem;
  }
  > p {
    text-align: center;
    margin: 0;
    font-size: 1.5rem;
    width: 600px;
  }
`;
