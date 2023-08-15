"use client";

import { FC } from "react";
import Image from "next/image";
import { ImageDiv } from "./DropImage-styles";
import hero from "../../images/image-hero-desktop.png";

interface DropImageProps {}

const DropImage: FC<DropImageProps> = ({}) => {
  return (
    <ImageDiv>
      <Image height={500} width={400} src={hero} alt="hero" />
    </ImageDiv>
  );
};

export default DropImage;
