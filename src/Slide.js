import React from "react";
import styled from "styled-components";

function Slide({ img }) {
  return (
    <>
      <IMG src={img} />
    </>
  );
}

const IMG = styled.img`
  width: 100%;
  height: 100%;
`;

export default Slide;
