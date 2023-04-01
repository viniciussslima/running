import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const TooltipContent = styled.div`
  background-color: ${({ theme }) => theme.colors.white.one};
  border: 1px solid ${({ theme }) => theme.colors.gray.two};
  white-space: nowrap;
  margin: 0px;
  padding: 10px;
`;

export const TooltipTitle = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin: 0px;
`;
