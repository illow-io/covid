import React from 'react';
import { Box } from "grommet";
import { FormClose } from 'grommet-icons';

export default ({ onClose, children }) => (
  <Box
    tag="footer"
    pad={{ horizontal: "22px", top: "21px", bottom: "45px" }}
    style={{background: 'rgba(81, 46, 212, 0.8)', color: 'white', position: 'relative'}}
  >
    <Box alignSelf="end" onClick={onClose}>
      <FormClose style={{position: 'absolute', top: '-16px', right: 20, borderRadius: '100%', backgroundColor: '#fff',     boxShadow: '0px 0px 2px 0px #000'}} size="32px" />
    </Box>
    {children}
  </Box>
);