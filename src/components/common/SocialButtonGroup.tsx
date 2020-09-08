import * as React from 'react';

import SocialButton from './SocialButton';
import styled from 'styled-components';

const SocialButtonGroupBlock = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1.5rem;
`;

const SocialButtonGroup = () => {
  return (
    <SocialButtonGroupBlock>
      <SocialButton provider="google" tabIndex={5} />
      <SocialButton provider="facebook" tabIndex={6} />
    </SocialButtonGroupBlock>
  );
};

export default SocialButtonGroup;
