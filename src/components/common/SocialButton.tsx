import * as React from 'react';

import { FacebookIcon, GoogleIcon } from '../../static/svg';
import styled, { css } from 'styled-components';

import palette from '../../lib/styles/palette';

const SocialButtonBlock = styled.button<{ border: boolean }>`
  width: 220px;
  height: 3rem;
  display: flex;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  outline: none;
  transition: 0.125s all ease-in;
  font-size: 1rem;
  color: white;
  svg {
    margin-right: 0.5rem;
  }
  ${props =>
    props.border &&
    css`
      border: 1px solid ${palette.gray3};
    `}
  &:focus {
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.35);
  }
`;

interface SocialButtonProps {
  provider: 'facebook' | 'google';
  tabIndex?: number;
}

const providerMap = {
  google: {
    color: 'white',
    icon: GoogleIcon,
    border: true,
    content: 'sign up with google',
  },
  facebook: {
    color: '#3b5998',
    icon: FacebookIcon,
    border: true,
    content: 'sign up with facebook',
  },
};

const SocialButton: React.FC<SocialButtonProps> = ({ provider, tabIndex }) => {
  const info = providerMap[provider];
  const { icon: Icon, color, border, content } = info;

  return (
    <SocialButtonBlock
      style={{
        background: color,
        color: provider === 'google' ? 'black' : 'white',
      }}
      border={border}
      tabIndex={tabIndex}
    >
      <Icon />
      {content}
    </SocialButtonBlock>
  );
};

export default SocialButton;
