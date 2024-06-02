import styled from "styled-components";

const Services = () => {
  return (
    <Container id="services">
      <Wrapper>
        <Up>
          <UpRight>
            <h1>
              We Make Your Business <br /> Bright
            </h1>
            <p>
              Proin sit amet leo sed velit porta porta ut eget velit. Nullam
              vehicula porta orci non dictum. In erat ipsum, interdum sed libero
              id, congue consequat sapien
            </p>
          </UpRight>
          <UpLeft>
            <Cards>
              <Circle></Circle>
              <h3>UI/UX Design</h3>
              <p style={{ width: "200px", marginBottom: "25px" }}>
                Interdum et malesuada order fames ac ante ipsum primis in
                faucibus.
              </p>
              <a href="#">DOWNLOAD</a>
            </Cards>
            <Cards>
              <Circle></Circle>
              <h3>Development</h3>
              <p style={{ width: "200px", marginBottom: "25px" }}>
                Interdum et malesuada order fames ac ante ipsum primis in
                faucibus.
              </p>
              <a href="#">DOWNLOAD</a>
            </Cards>
          </UpLeft>
        </Up>
        <Down>
          <Cards>
            <Circle></Circle>
            <h3>SEO & Content</h3>
            <p style={{ width: "200px", marginBottom: "25px" }}>
              Interdum et malesuada order fames ac ante ipsum primis in
              faucibus.
            </p>
            <a href="#">DOWNLOAD</a>
          </Cards>
          <Cards>
            <Circle></Circle>
            <h3>Marketing</h3>
            <p style={{ width: "200px", marginBottom: "25px" }}>
              Interdum et malesuada order fames ac ante ipsum primis in
              faucibus.
            </p>
            <a href="#">DOWNLOAD</a>
          </Cards>
          <Cards>
            <Circle></Circle>
            <h3>Graphic Design</h3>
            <p style={{ width: "200px", marginBottom: "25px" }}>
              Interdum et malesuada order fames ac ante ipsum primis in
              faucibus.
            </p>
            <a href="#">DOWNLOAD</a>
          </Cards>
          <Cards>
            <Circle></Circle>
            <h3>Branding</h3>
            <p style={{ width: "200px", marginBottom: "25px" }}>
              Interdum et malesuada order fames ac ante ipsum primis in
              faucibus.
            </p>
            <a href="#">DOWNLOAD</a>
          </Cards>
          <Cards>
            <Circle></Circle>
            <h3>Fast Delivery</h3>
            <p style={{ width: "200px", marginBottom: "25px" }}>
              Interdum et malesuada order fames ac ante ipsum primis in
              faucibus.
            </p>
            <a href="#">DOWNLOAD</a>
          </Cards>
        </Down>
      </Wrapper>
    </Container>
  );
};

export default Services;

const Circle = styled.div`
  width: 70px;
  height: 70px;
  border: 1px solid #398e3d;
  border-radius: 50%;
  margin-top: 20px;
`;
const Down = styled.div`
  width: 100%;
  height: 320px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 25px;
  margin-top: 25px;
  justify-content: space-between;
`;
const UpRight = styled.div``;
const Cards = styled.div`
  border: 1px solid #398e3d;
  border-radius: 15px;
  padding-left: 20px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #3e8eb2;
    color: white;
    transform: scale(1.05) translateY(-5px);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    border: none;
    background-position: right;
    a {
      color: white;
      text-decoration-color: #398e3d;
    }
  }
  a {
    color: #398e3d;
  }
`;
const UpLeft = styled.div`
  width: 40%;
  height: 320px;
  /* background-color: pink; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
`;
const Up = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  p {
    width: 550px;
    margin: 0;
  }
  h1 {
    font-size: 55px;
    margin: 0;
  }
`;
const Wrapper = styled.div`
  width: 90%;
  /* height: 100; */
  /* background-color: gold; */
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Container = styled.div`
  width: 100%;
  min-height: 400px;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 200px;
`;
