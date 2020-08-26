import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Slide from "./Slide";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";

// 0 ~ 2
const TOTAL_SLIDE = 2;

function Slider(props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  const slideRef = useRef(null);

  const onNextSlide = () => {
    if (currentSlide === TOTAL_SLIDE) {
      setCurrentSlide(0);
      return;
    }
    setCurrentSlide(addOne);
  };

  const onPrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDE);
      return;
    }
    setCurrentSlide(substractOne);
  };

  return (
    <Container>
      {currentSlide}
      <SlideContainer ref={slideRef}>
        <Slide img={img1} />
        <Slide img={img2} />
        <Slide img={img3} />
      </SlideContainer>
      <BUTTON onClick={onPrevSlide}>prev slide</BUTTON>
      <BUTTON onClick={onNextSlide}>next slide</BUTTON>
    </Container>
  );
}

export default Slider;

const addOne = (a) => {
  return a + 1;
};

const substractOne = (a) => {
  return a - 1;
};

const Container = styled.div`
  width: 500px;
  overflow: hidden;
`;

const SlideContainer = styled.div`
  width: 100%;
  display: flex;
`;

const BUTTON = styled.button`
  all: unset;
  border: 1px solid coral;
  border-radius: 10px;
  color: coral;
  padding: 0.5em 2em;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: #fff;
  }
`;
