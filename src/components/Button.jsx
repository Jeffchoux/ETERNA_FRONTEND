import styled from "styled-components";

const Button = styled.button`
  background-color: #ff7f50;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    background-color: #ff6347;
  }
`;

export default Button;
