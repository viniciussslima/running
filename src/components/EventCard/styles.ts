import styled from 'styled-components';

export const Card = styled.div<{
  canClick: boolean;
}>`
  color: ${({ theme }) => theme.colors.white.one};
  background-color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 12px;
  padding: 16px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  cursor: ${({ canClick }) => (canClick ? 'pointer' : 'default')};
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSize.big};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const CardSubtitle = styled.span`
  font-size: ${({ theme }) => theme.fontSize.normal};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;

export const CardBody = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 476px) {
    flex-direction: column-reverse;
    gap: 10px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: ${({ theme }) => theme.fontSize.medium};
`;

export const Label = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;

export const RightSide = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 16px;
  font-size: ${({ theme }) => theme.fontSize.big};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  @media (max-width: 476px) {
    align-items: flex-start;
    gap: 10px;
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

export const Certificate = styled.a`
  color: ${({ theme }) => theme.colors.white.one};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  text-decoration: none;
`;
