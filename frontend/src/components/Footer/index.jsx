import P from 'prop-types';
import { SectionContainer } from '../components/SectionContainer';
import { TextComponent } from '../components/TextComponent';
import * as Styled from './styles';

export const Footer = ({ html }) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <TextComponent>{html}</TextComponent>
      </SectionContainer>
    </Styled.Container>
  );
};

Footer.propTypes = {
  html: P.string.isRequired,
};
