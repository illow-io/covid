import React from 'react';
import { Box, Heading, Header } from "grommet";
import use from '../state/use';

export default () => {
  const user = use('user')[0];
  
  return (
    <Header background="light-4" pad="small">
      <Heading level={3} size="medium">
        Data For Humanity
      </Heading>
  
      {(user) && (
        <Box
        height="xxsmall"
        width="xxsmall"
        round="full"
        background={`url(${user.imageUrl})`}
        />
      )}
    </Header>
  );
};
