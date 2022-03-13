import { ReactNode } from "react";
import styled from "styled-components";

interface GlobalLayoutProps {
  children: ReactNode;
  bgColor: string;
}

interface StyledContainerProps {
  bgColor: string;
}

const StyledContainer = styled.div<StyledContainerProps>`
  width: 370px;
  height: 640px;
  border: 1px solid #e5d32e;
  background-color: ${(props) => props.bgColor};
`;

const Container = ({ children, bgColor }: GlobalLayoutProps) => {
  return <StyledContainer bgColor={bgColor}>{children}</StyledContainer>;
};

export default Container;
