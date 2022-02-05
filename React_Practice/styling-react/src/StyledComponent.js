import styled, { css } from "styled-components";

const sizes = { desktop: 1024, tablet: 768 };

const media = Object.keys(sizes).recude((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;
});

const Box = styled.div`
/* props로 전달받은 데이터에 color가 존재한다면 그 값으로 설정하고 없다면 blue로 지정한다. */
  background: ${props => props.color || 'blue'};
  padding: 1rem;
  display: flex;
  /* 가로 크기 1024px에 가운데 정렬하고
  가로 크기가 작아지면 크기를 줄이고
  768px 미만이 되면 꽉 채움 */
  width: 1024px;
  margin: 0 auto;
  ${media.desktop`width:768px`};
  ${media.tablet`width: 100%;`};
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background: rgba(255,255,255,0.9);
  }

  /* props로 받은 값이 존재한다면 */
  ${props =>
    // 만약 props 내부에 inverted가 true라면 아래 css를 적용한다.
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `};

    & + button {
      margin-left: 1rem;
    }
`;

const StyleCompnent = () => {
  return (
    <Box color="black">
      <Button>안녕</Button>
      <Button inverted={true}>테두리만</Button>
    </Box>
  );
}

export default StyleCompnent;
