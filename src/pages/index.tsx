import React from 'react';
import { Heading1 } from '@dypp/typography';
import { Header } from '../components/Header';
import '../css/imports.scss';
import './style.scss';

export default function Home() {
  return (
    <div className="main">
      <Header />
      <div>
        <Heading1>Dypp</Heading1>
      </div>
    </div>
  );
}
