import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  background-color: ${(props) =>
    props.disabled ? props.theme.colors.primary : props.theme.colors.secondary};
  color: ${(props) =>
    props.disabled ? props.theme.colors.white.one : props.theme.colors.black};
  width: 40px;
  height: 40px;
  margin: 30px 5px;
  border-radius: 8px;
  border: none;
  font-size: ${(props) => props.theme.fontSize.normal};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    opacity: ${(props) => (props.disabled ? 1 : 0.7)};
  }
`;
