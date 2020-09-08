import React from 'react';
import { mediaQuery } from '../../lib/styles/media';
import styled from 'styled-components';

export type ResponsiveProps = {
  className?: string;
  children: React.ReactNode;
};

function Responsive({ className, children }: ResponsiveProps) {
  return <Block className={className}>{children}</Block>;
}

const Block = styled.div`
  width: 1728px;
  margin-left: auto;
  margin-right: auto;
  ${mediaQuery(1919)} {
    width: 1376px;
  }
  ${mediaQuery(1440)} {
    width: 1280px;
  }
  ${mediaQuery(1312)} {
    width: 912px;
  }
  ${mediaQuery(944)} {
    width: calc(100% - 2rem);
  }
  ${mediaQuery(767)} {
    width: calc(100% - 2rem);
  }
`;

export default Responsive;
