import P, { bool } from 'prop-types';
import * as Styled from './styles';

export const MenuLink = ({ children, link, newTabe = false }) => {
  const target = newTabe ? '_blank' : '_self';

  return (
    <Styled.Container target={target} href={link}>
      {children}
    </Styled.Container>
  );
};

MenuLink.propTypes = {
  children: P.node.isRequired,
  link: P.string.isRequired,
  newTabe: bool,
};
