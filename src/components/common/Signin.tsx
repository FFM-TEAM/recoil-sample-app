import React, { FC, useState } from 'react';

import media from '../../lib/styles/media';
import styled from 'styled-components';

const BackgroundContainer = styled.div`
  flex: 1;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  padding: 20px 10px;
  ${media.large} {
    padding: 40px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #1b1b21;
  opacity: 0.7;
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  height: 100%;
  margin: auto;
  ${media.medium} {
    flex-direction: row;
  }
`;

const TitleContainer = styled.div`
  position: relative;
  padding: 10px;
  ${media.small} {
    flex: 1;
    display: flex;
    align-items: center;
  }
`;

const Title = styled.h1`
  width: 100%;
  font-size: 32px;
  font-weight: 300;
  color: white;
  word-break: keep-all;
  text-align: center;
  ${media.small} {
    text-align: left;
  }
`;

const LoginFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 10px;
  justify-content: flex-end;
`;

const LoginForm = styled.form`
  max-width: 370px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 6px;
  padding: 30px 20px;
  box-sizing: border-box;
  ${media.small} {
    padding: 50px 20px;
  }
`;

const FormTitle = styled.h2`
  font-size: 32px;
  color: white;
  text-align: center;
`;

const FormInput = styled.input`
  background-color: rgba(255, 255, 255, 0.7);
  width: 100%;
  height: 40px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  padding: 7px 20px;
  box-sizing: border-box;
  margin: 4px 0;
`;

const FormInputContainer = styled.div`
  margin-top: 20px;
  ${media.medium} {
    margin-top: 55px;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  height: 48px;
  font-weight: bold;
  background-color: #6da6fc;
  color: white;
  border: none;
  border-radius: 6px;
  margin-top: 20px;
  box-sizing: border-box;
  cursor: pointer;
`;

const LinkContainer = styled.div`
  display: flex;
  vertical-align: center;
  justify-content: center;
  margin-top: 20px;
`;

const Link = styled.a`
  color: white;
  margin: 0 5px;
`;

const Division = styled.p`
  color: white;
  margin: 0 5px;
`;

const SocialLogin = styled.div`
  margin-top: 10px;
  ${media.small} {
    margin-top: 40px;
    text-align: center;
  }
`;

const SocialButtons = styled.button`
  width: 100%;
  height: 48px;
  color: white;
  border: none;
  border-radius: 6px;
  ${media.small} {
    width: 156px;
  }
`;

const GoogleLoginButton = styled(SocialButtons)`
  background-color: #dd4b39;
`;

const FacebookLoginButton = styled(SocialButtons)`
  background-color: #3b5998;
  margin-top: 10px;
  ${media.small} {
    margin-left: 6px;
    margin-top: 0;
  }
`;

type Props = {};

enum Error {
  InvalidEmail = 'InvalidEmail',
  InvalidPassword = 'InvalidPassword',
  FailedSignIn = 'FailedSignIn',
}

type ErrorType = {
  type: Error;
  message: string;
};

const Signin: FC<Props> = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <BackgroundContainer>
      <Overlay />
      <Container>
        <TitleContainer>
          <Title>
            쇼핑몰 관리자를 위한
            <br />
            오픈마켓 통합솔루션 시스템
          </Title>
        </TitleContainer>
        <LoginFormContainer>
          <LoginForm>
            <FormTitle>로그인</FormTitle>
            <FormInputContainer>
              <FormInput
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="이메일을 입력해주세요"
              />
              <FormInput
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="비밀번호를 입력해주세요"
              />
            </FormInputContainer>

            <LoginButton>로그인</LoginButton>
            <LinkContainer>
              <Link href="/signup">회원가입</Link>
              <Division>|</Division>
              <Link href="/reset-password">비밀번호 찾기</Link>
            </LinkContainer>
            <SocialLogin>
              <GoogleLoginButton>구글 로그인</GoogleLoginButton>
              <FacebookLoginButton>페이스북 로그인</FacebookLoginButton>
            </SocialLogin>
          </LoginForm>
        </LoginFormContainer>
      </Container>
    </BackgroundContainer>
  );
};

export default Signin;
