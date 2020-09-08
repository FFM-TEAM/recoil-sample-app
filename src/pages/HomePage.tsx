import * as React from 'react';

import PageTemplate from '../components/common/PageTemplate';
import UserSelector from '@/components/common/UserSelector';
import styled from 'styled-components';

const HomeTemplateBlock = styled(PageTemplate)``;

export interface HomePageProps {}

function HomePage() {
  return (
    <HomeTemplateBlock>
      <UserSelector />
    </HomeTemplateBlock>
  );
}
export default HomePage;
