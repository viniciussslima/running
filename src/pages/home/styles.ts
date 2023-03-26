import styled from 'styled-components';

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.white.one};
  font-size: ${({ theme }) => theme.fontSize.big};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin: 0px 0px 12px 0px;
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
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

export const Card = styled.div`
  color: ${({ theme }) => theme.colors.white.one};
  background-color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 12px;
  padding: 16px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 12px;
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
