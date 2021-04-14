import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  ${({
    $width,
    $height,
    $fontSize,
    $backgroundColor,
    $color,
    $hoverBackground,
    $hoverColor,
  }) =>
    css`
      width: ${$width}px;
      height: ${$height}px;
      font-size: ${$fontSize}rem;
      background-color: ${$backgroundColor};
      color: ${$color};
      line-height: ${$height}px;

      &:hover {
        background-color: ${$hoverBackground};
        color: ${$hoverColor};
      }
    `}

  font-family: Chungchunsidae;
  display: inline-block;
  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  & + & {
    margin-left: 20px;
  }
`;
