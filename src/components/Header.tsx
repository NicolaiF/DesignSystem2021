import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Link } from '../../packages/typography/src';
import './header.scss';

export const Header = () => {
  return (
    <header className="header">
      <Link as={GatsbyLink} to="/om">
        Om Dypp
      </Link>
      <Link as={GatsbyLink} to="/middler">
        DIM middler
      </Link>
      <Link as={GatsbyLink} to="/presse">
        Presse
      </Link>
      <Link as={GatsbyLink} to="/kontakt-oss">
        Kontakt oss
      </Link>
    </header>
  );
};
