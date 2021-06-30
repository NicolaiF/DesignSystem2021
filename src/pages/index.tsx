import React from 'react';
import { Button } from '@dypp/button';
import { Heading } from '@dypp/typography';
import { Input } from '@dypp/form';
import './imports.scss';
import './style.scss';

export default function Home() {
  return (
    <div className="main">
      <div>
        <Heading>Dypp</Heading>
      </div>
      <div>
        <Input label="E-post" />
        <Input label="Emne" />
        <Input label="Din melding" area placeholder="Skriv her..." />
        <Button>Send</Button>
      </div>
    </div>
  );
}
