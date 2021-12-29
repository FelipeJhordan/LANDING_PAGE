import P from 'prop-types';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';
import * as Styled from './styles';

export const GridText = ({ title, description, grid, background = false }) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Heading size="huge" upercase colorDark={!background}>
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((e) => (
            <Styled.GridElement key={e.title}>
              <Heading size="medium" colorDark={!background}>
                {e.title}
              </Heading>
              <TextComponent>{e.description}</TextComponent>
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

GridText.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      description: P.string.isRequired,
    }),
  ),
  background: P.bool,
};
