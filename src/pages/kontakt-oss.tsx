import { Heading1, Paragraph } from '../../packages/typography/src';
import { Input } from '../../packages/form/src';
import { Button } from '../../packages/button/src';
import React from 'react';
import { Header } from '../components/Header';
import './kontakt-oss.scss';

const Presse = () => {
  return (
    <div className="main">
      <Header />
      <div className="content">
        <Heading1>Kontakt oss</Heading1>
        <Paragraph>
          Vi er på utkikk er investorer og samarbeidspartere. Vi kan også bookes
          inn til å holde foredrag.
        </Paragraph>
        <div className="form">
          <Input label="E-post" />
          <Input label="Emne" />
          <Input label="Din melding" area placeholder="Skriv her..." />
        </div>
        <Button>Send</Button>
      </div>
    </div>
  );
};

export default Presse;
