import { ReactNode } from "react";
import styled from "styled-components";

const StyledContents = styled.div`
  width: 370px;
  height: 590px;
  background-color: #f6f6f6;
`;

interface ContentsProps {
  children: ReactNode;
}
const Contents = ({ children }: ContentsProps) => {
  return <StyledContents>{children}</StyledContents>;
};

export default Contents;
