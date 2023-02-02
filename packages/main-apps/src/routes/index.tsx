import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { HomeModules, AboutModules } from '@/modules';

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeModules />} />
      <Route path="/about" element={<AboutModules />} />
    </Routes>
  );
};

export default index;
