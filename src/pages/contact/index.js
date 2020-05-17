import React, { memo } from 'react'
import { Title, List, Item, Link } from './style';
import { Container } from '../../components/container/style';

const Contact = () => {
  return (
    <Container>
      <Title>Contact Us</Title>
      <List>
        <Item>
          Phone: <Link href="tel:01027050131">01027050131</Link>
        </Item>
        <Item>
          Mail: <Link href="mailto:moaaz_bs@yahoo.com">moaaz_bs@yahoo.com</Link>
        </Item>
        <Item>
          Twitter: <Link href="https://twitter.com/moaaz_bhnas">@moaaz_bhnas</Link>
        </Item>
      </List>
    </Container>
  );
}

export default memo(Contact);