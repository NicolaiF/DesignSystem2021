import React from 'react';
import { Heading1 } from '../../packages/typography/src';
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
