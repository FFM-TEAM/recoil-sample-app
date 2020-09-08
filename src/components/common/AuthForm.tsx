import * as React from 'react';

import AuthEmailForm from './AuthEmailForm';
import SocialButtonGroup from './SocialButtonGroup';
import media from '@/lib/styles/media';
import palette from '@/lib/styles/palette';
import styled from 'styled-components';
import useInput from '@/lib/hooks/useInput';

const AuthFormBlock = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  line-height: 1.5;
  .upper-wrapper {
    ${media.small} {
      margin-top: 2rem;
    }
  }
  h2,
  h4 {
    margin: 0;
  }
  h2 {
    font-size: 1.3125rem;
    color: ${palette.gray8};
  }
  h4 {
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: ${palette.gray6};
  }
  section + section {
    margin-top: 2.5rem;
  }
  .foot {
    ${media.small} {
      margin-top: 2rem;
    }

    text-align: right;
    span {
      margin-right: 0.25rem;
    }
    .link {
      display: inline-block;
      font-weight: bold;
      color: ${palette.teal6};
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export interface AuthFormProps {
  loading: boolean;
  onSendAuthEmail: (email: string) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ onSendAuthEmail, loading }) => {
  const [email, onChangeEmail] = useInput('');
  const onSubmit = (email: string) => {
    onSendAuthEmail(email);
  };

  const modeText = '로그인';

  return (
    <AuthFormBlock>
      <div className="upper-wrapper">
        <h2 data-testid="title">{modeText}</h2>
        <section>
          <h4>이메일로 {modeText}</h4>
          <AuthEmailForm
            value={email}
            onChange={onChangeEmail}
            onSubmit={onSubmit}
            disabled={loading}
          />
          <button>로그인</button>
        </section>
        <section>
          <h4>소셜 계정으로 {modeText}</h4>
          <SocialButtonGroup />
        </section>
      </div>
      <div className="foot">
        <span>{'계정이 이미 있으신가요?'}</span>
        <div className="link" tabIndex={7} data-testid="switchmode">
          {'회원가입'}
        </div>
      </div>
    </AuthFormBlock>
  );
};

export default AuthForm;
