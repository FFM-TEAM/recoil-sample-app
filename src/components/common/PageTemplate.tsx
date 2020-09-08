import * as React from 'react';

import Header from './Header';
import styled from 'styled-components';

const PageTemplateBlock = styled.div``;

interface PageTemplateProps {
  style?: React.CSSProperties;
  className?: string;
}

const PageTemplate: React.FC<PageTemplateProps> = ({
  style,
  className,
  children,
}) => {
  return (
    <PageTemplateBlock style={style} className={className}>
      <Header />
      {children}
    </PageTemplateBlock>
  );
};

export default PageTemplate;
