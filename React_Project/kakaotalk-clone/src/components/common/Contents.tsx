import { ReactNode } from "react";
import styled from "styled-components";

const StyledContents = styled.div`
  width: 370px;
  height: 590px;
`;

interface ContentsProps {
  children: ReactNode;
}
const Contents = ({ children }: ContentsProps) => {
  return <StyledContents>{children}</StyledContents>;
};

export default Contents;
