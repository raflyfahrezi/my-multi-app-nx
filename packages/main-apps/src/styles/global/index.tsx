import React from 'react';
import { Global as GlobalEmotion } from '@emotion/react';

import { sGlobal } from './styles';

const Global = () => {
  return <GlobalEmotion styles={sGlobal} />;
};

export default Global;
