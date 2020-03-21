import React from 'react';
import { Box } from "grommet";
import { FormClose } from 'grommet-icons';

export default ({ onClose, children }) => (
  <Box
    tag="footer"
    pad={{ horizontal: "22px", top: "21px", bottom: "45px" }}
    background="dark-2"
  >
    <Box alignSelf="end" onClick={onClose}>
      <FormClose size="32px" />
    </Box>
    {children}
  </Box>
);