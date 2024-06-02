import styled from "styled-components";
import img from "../assets/credit.svg";
import img1 from "../assets/chat.svg";
import img2 from "../assets/deliver.svg";

const FewPoints = () => {
  return (
    <Container id="about">
      <h1>What We Do?</h1>
      <Wrapper>
        <Card>
          <img src={img} alt="" />
          <h2>Project Introduction</h2>
          <p>
            Cras sagittis lacinia arcu, a interdum ante gravida vel. Etiam
            bibendum arcu massa, non condimentum neque sed
          </p>
          <Circle>1</Circle>
        </Card>
        <Card>
          <img src={img1} alt="" />
          <h2>Research & Concept</h2>
          <p>
            Cras sagittis lacinia arcu, a interdum ante gravida vel. Etiam
            bibendum arcu massa, non condimentum neque sed
          </p>
          <Circle>2</Circle>
        </Card>
        <Card>
          <img src={img2} alt="" />
          <h2>Project Termination</h2>
          <p>
            Cras sagittis lacinia arcu, a interdum ante gravida vel. Etiam
            bibendum arcu massa, non condimentum neque sed
          </p>
          <Circle>3</Circle>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default FewPoints;

const Circle = styled.div`
  width: 70px;
  height: 70px;
  background: linear-gradient(to bottom, #398e3d, #3f8ebf);
  color: white;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 25px;
  margin-top: 20px;
`;

const Card = styled.div`
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    height: 100px;
  }
  p {
    width: 350px;
    text-align: center;
    margin: 0;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  flex-direction: column;

  h1 {
    font-size: 50px;
  }
`;
const Wrapper = styled.div`
  width: 90%;
  min-height: 400px;
  /* background-color: gold; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
`;
