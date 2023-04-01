import styled from 'styled-components';

export const Header = styled.header`
  background-color: #3f3f3f;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  position: sticky;
  top: 0;
  margin-bottom: 16px;
`;

export const Route = styled.span<{
  selected: boolean;
}>`
  color: ${({ selected, theme }) =>
    selected ? theme.colors.primary : theme.colors.white.main};
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  cursor: pointer;
`;
