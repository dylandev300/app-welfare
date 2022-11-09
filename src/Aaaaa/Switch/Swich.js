import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../../Pages/Home';
import Move from '../../Pages/Moves';

import Coffes from '../../Pages/Coffes';
import CartItem from '../../Pages/CartItem';
import Welfare from '../../Pages/Welfare';

const Swich = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/coffes" element={<Coffes />} />
      <Route path="/welfare" element={<Welfare />} />

      <Route path="/move" element={<Move />} />
      <Route path="/cartitem" element={<CartItem />} />
    </Routes>
  );
};

export default Swich;
