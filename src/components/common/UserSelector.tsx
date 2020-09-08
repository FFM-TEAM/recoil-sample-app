import * as React from 'react';

import User from './User';
import { charCountState } from '@/modules';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

const UserSelectorBlock = styled.div``;

const UserSelector: React.FC = props => {
  const user = useRecoilValue(charCountState);

  return (
    <UserSelectorBlock>
      {user?.map(item => (
        <User
          key={item.id}
          eMail={item.eMail}
          firstName={item.firstName}
          lastName={item.lastName}
        />
      ))}
    </UserSelectorBlock>
  );
};

export default UserSelector;
