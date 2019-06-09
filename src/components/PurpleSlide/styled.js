import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(#833582, #351335);
  color: white;
  > img {
    height: 10rem;
    width: 10rem;

    @media (max-width: 700px) {
      height: 7rem;
      width: 7rem;
    }
  }
  > * > img {
    height: 10rem;
    width: 10rem;

    @media (max-width: 700px) {
      height: 7rem;
      width: 7rem;
    }
  }
  > img.hand {
    animation-name: wave-animation;
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
    transform-origin: 70% 70%;
    @keyframes wave-animation {
      0% {
        transform: rotate(0deg);
      }
      10% {
        transform: rotate(-10deg);
      }
      20% {
        transform: rotate(12deg);
      }
      30% {
        transform: rotate(-10deg);
      }
      40% {
        transform: rotate(9deg);
      }
      50% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
  }
  > h1 {
    margin: 0;
    font-size: 4rem;
    @media (max-width: 700px) {
      font-size: 2rem;
    }
  }
  > p {
    text-align: center;
    margin: 0;
    font-size: 1.5rem;
    width: 600px;
    @media (max-width: 700px) {
      width: 300px;
      font-size: 1rem;
    }
  }
`;
