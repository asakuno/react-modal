import { FC, ButtonHTMLAttributes } from "react";
import styled from "styled-components";

type ButtonSize = "small" | "medium" | "large";
type ButtonVisual = "primary" | "secondary" | "alert";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: ButtonSize;
  visual?: ButtonVisual;
};

const ButtonWrapper = styled.button<ButtonProps>`
  font-weight: bold;
  cursor: pointer;
  background-color: var(--background-white);
  border: 2px solid transparent;

  &:disabled {
    pointer-events: none;
    opacity: 0.6;
  }

  ${({ size }) => {
    switch (size) {
      case "small":
        return `
          padding: 0.25rem 0.75rem;
          font-size: 12px;
          border-radius: 4px;
        `;
      case "large":
        return `
          padding: 0.5rem 3rem;
          font-size: 20px;
          border-radius: 8px;
        `;
      default:
        return `
          padding: 0.5rem 1rem;
          font-size: 16px;
          border-radius: 8px;
        `;
    }
  }}

  ${({ visual }) => {
    switch (visual) {
      case "primary":
        return `
          color: #ffffff;
          background-color: #0dcaf0;

          &:hover {
            background-color: #0dcad0;
          }

          &:active {
            background-color: #0dcaaa;
          }
        `;
      case "secondary":
        return `
          color: #dddddd;
          border-color: #ffc107;

          &:hover {
            background-color: #ffc999;
          }

          &:active {
            background-color: #fff789;
          }
        `;
      case "alert":
        return `
          color: #000000;
          background-color: red;
        `;
      default:
        return `
          color: white;
          background-color: orange;
        `;
    }
  }}
`;

const Button: FC<ButtonProps> = ({
  size = "medium",
  visual = "primary",
  children,
  ...props
}) => {
  return (
    <ButtonWrapper size={size} visual={visual} {...props}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
