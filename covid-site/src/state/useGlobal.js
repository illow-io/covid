import React from 'react';
import globalHook from 'use-global-hook';

import { initialState as user, setUser } from './user';
 
const initialState = {
  user,
};
 
const actions = {
  setUser,
};
 
export default globalHook(React, initialState, actions);