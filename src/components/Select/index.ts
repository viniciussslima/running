import styled from 'styled-components';

export const Select = styled.select`
  background: ${(props) => props.theme.colors.white.one};
  height: 45px;
  border: 2px solid transparent;
  border-radius: 8px;
  padding: 1px 4px;

  &:focus {
    border: 2px solid ${(props) => props.theme.colors.primary};
  }
`;
