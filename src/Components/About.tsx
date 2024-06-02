import styled from "styled-components";
import abt from "../assets/oyiboMan.jpg";
import abtsvg from "../assets/exabt.svg";
import { Link } from "react-scroll";
const About = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <img src={abt} alt="" />
        </Left>
        <Right>
          <h2>
            We Help Make <br /> Website Better
          </h2>
          <p>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Duis dictum tortor nec pellentesque
            imperdiet. Sed vitae erat elit. Donec sodales consectetur erat et
            aliquam.
          </p>
          <p>
            Suspendisse egestas, nisi et cursus dapibus, eros lorem tincidunt
            dolor, at posuere turpis dui et est. Integer tristique, dolor eu
            pretium tincidunt, neque metus eleifend odio, id ultrices purus
            lacus eu justo. Pellentesque in vehicula nunc. Sed at tortor
            dignissim, facilisis justo a, vulputate augue
          </p>
          <Link to="download" smooth={true} duration={500} offset={-100}>
            <button>DOWNLOAD</button>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default About;

const Left = styled.div`
  width: 600px;
  height: 600px;
  /* background-color: gold; */
  border-radius: 50%;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Right = styled.div`
  p {
    width: 650px;
  }

  h2 {
    font-size: 50px;
    margin: 0;
  }

  button {
    width: 150px;
    height: 45px;
    border-radius: 30px;
    background: linear-gradient(to bottom, #398e3d, #3f8ebf);
    margin-top: 20px;
    color: white;
    border: none;
    cursor: pointer;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 120px;
`;
const Wrapper = styled.div`
  width: 90%;
  min-height: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: red; */
`;
