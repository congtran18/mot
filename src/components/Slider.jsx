import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import { sliderItems } from "../data";
import { mobile } from "../responsive";
import { tablet } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  /* background-color: coral; */
  position: relative;
  ${mobile({ display: "none" })}
  ${tablet({ display: "none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  /* &:hover {
    opacity: 0.7;
  } */
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  /* margin-top: 100px; */
  height: 100%;
  width: 50vw;
  object-fit: contain;
  /* background-color: yellow; */
  /* min-width: 100%;  */
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const BtnLink = styled(Link)`
  text-decoration: none;
  &:link {
    color: black;
  }
  &:visited {
    color: black;
  }
  &:hover {
    color: black;
  }
  &:active {
    color: black;
  }
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction='left' onClick={() => handleClick("left")}>
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((slide) => (
          <Slide bg={slide.bg} key={slide.id}>
            <ImgContainer>
              <Image src={slide.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{slide.title}</Title>
              <Desc>{slide.desc}</Desc>
              <Button>
                <BtnLink to='/productlist'>SHOP NOW</BtnLink>
              </Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction='right' onClick={() => handleClick("right")}>
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
