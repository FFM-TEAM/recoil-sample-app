import * as React from 'react';

import styled from 'styled-components';

const UserBlock = styled.div``;
export interface UserProps {
  eMail: string;
  firstName: string;
  lastName: string;
}

const User: React.FC<UserProps> = ({ eMail, firstName, lastName }) => {
  return (
    <UserBlock>
      <div> eMail:{eMail}</div>
      <div> firstName:{firstName}</div>
      <div> lastName:{lastName}</div>
    </UserBlock>
  );
};

export default User;
