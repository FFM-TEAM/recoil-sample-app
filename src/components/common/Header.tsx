import React, { ReactElement, useCallback } from 'react';
import { coreState, userState } from '../../modules';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';

import HeaderUserIcon from './HeaderUserIcon';
import { Link } from 'react-router-dom';
import Responsive from './Responsive';
import RoundButton from './RoundButton';
import media from '@/lib/styles/media';
import styled from 'styled-components';

const Block = styled.div`
  height: 4rem;
  background-color: #1c1e24;
`;

const Content = styled(Responsive)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: white;
    font-size: 2rem;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  .write-button {
    ${media.medium} {
      display: none;
    }
  }
`;

function Header(): ReactElement {
  const [state, setState] = useRecoilState(coreState);
  const user = useRecoilValue(userState);

  //reset
  const logout = useResetRecoilState(userState);

  const onLoginClick = useCallback(() => {
    setState({
      ...state,
      layer: true,
      popup: true,
    });
  }, [state, setState]);

  return (
    <Block>
      <Content>
        <Link to="/">{'LOGO'}</Link>
        <Right>
          {user ? (
            <HeaderUserIcon onClick={logout} />
          ) : (
            <RoundButton color="darkGray" onClick={onLoginClick}>
              로그인
            </RoundButton>
          )}
        </Right>
      </Content>
    </Block>
  );
}

export default Header;
