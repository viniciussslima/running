import styled from 'styled-components';

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.white.one};
  font-size: ${({ theme }) => theme.fontSize.big};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin: 0px 0px 12px 0px;
`;

export const PhotosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
  align-items: center;
  margin-bottom: 12px;
`;

export const Photo = styled.img`
  width: 100%;
`;
