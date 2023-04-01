import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 12px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Search = styled.input`
  height: 40px;
  border: 2px solid transparent;
  border-radius: 8px;
  padding: 1px 4px;

  &:focus {
    border: 2px solid ${(props) => props.theme.colors.primary};
  }
`;
