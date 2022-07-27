import React from 'react';
import styled from 'styled-components';

// Libraries
import { Helmet } from 'react-helmet';

// Components
import Tickets from '../components/tickets/Ticket';
import { Container } from '../components';

// Assets
import { GRAPHICS } from '../../config/img/graphics';

const Decoration = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  @media (max-width: 600px) {
    width: 50%;
    height: auto;
  }
`;

const tickets = () => (
  <Container>
    <Helmet>
      <title>TEDxShivNadarUniversity | Tickets</title>
      <meta name='title' content='TEDxShivNadarUniversity | Tickets' />
      <link rel='canonical' href='https://tedxshivnadaruniversity.com/tickets' />
      <meta name='description' content='TEDxShivNadarUniversity 2022 Event Tickets.' />
    </Helmet>

    <Tickets />
    <Decoration src={GRAPHICS.TOP_LEFT} alt='ellipse' />
  </Container>
);

export default tickets;
