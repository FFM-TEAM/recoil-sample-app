import AuthContainer from './AuthContainer';
import GlobalStyles from '@/GlobalStyles';
import OpaqueLayer from '@/components/common/OpaqueLayer';
import React from 'react';
import { coreState } from '../modules';
import { useRecoilValue } from 'recoil';

const Core: React.FC = () => {
  const layer = useRecoilValue(coreState);

  return (
    <>
      <OpaqueLayer visible={layer.layer} />
      <AuthContainer />
      <GlobalStyles />
    </>
  );
};

export default Core;
