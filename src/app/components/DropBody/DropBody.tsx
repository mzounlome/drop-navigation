"use client";

import {
  DropButton,
  DropDiv,
  DropHeader,
  DropParagraph,
} from "./DropBody-styles";

import { FC } from "react";

interface DropBodyProps {}

const DropBody: FC<DropBodyProps> = ({}) => {
  return (
    <DropDiv>
      <DropHeader>
        Make <br /> remote work
      </DropHeader>
      <DropParagraph>
        Get your team in sync, no matter your location. Streamline processes,
        create team rituals, and watch productivity soar.
      </DropParagraph>
      <DropButton>Learn more</DropButton>
    </DropDiv>
  );
};

export default DropBody;
