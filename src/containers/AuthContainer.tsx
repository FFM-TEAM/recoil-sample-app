import React, { useCallback } from 'react';
import { coreState, userState } from '../modules';
import { useRecoilState, useResetRecoilState } from 'recoil';

import AuthForm from '../components/common/AuthForm';
import AuthModal from '../components/common/AuthModal';
import { generate } from '../modules/data';

function AuthContainer() {
  const [state, ,] = useRecoilState(coreState);
  const [, setUser] = useRecoilState(userState);

  // reset
  const modalClose = useResetRecoilState(coreState);

  const Login = useCallback(() => {
    setUser(generate(15));
    modalClose();
  }, [modalClose, setUser]);

  return (
    <AuthModal visible={state.popup} onClose={modalClose}>
      <AuthForm onSendAuthEmail={Login} loading={true} />
    </AuthModal>
  );
}

export default AuthContainer;
