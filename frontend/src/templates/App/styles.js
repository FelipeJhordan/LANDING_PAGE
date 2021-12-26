import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${(props) => css`
    color: ${props.background};
  `}
  ${({ theme }) => css`
    background: ${theme.colors.secondaryBg};
  `}
`;
