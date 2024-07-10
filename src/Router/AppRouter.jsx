import { Home,CardsGarments } from '@/components';
import React from 'react'
import { Routes, Route} from "react-router-dom";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/CardGarments/:titulo" element={<CardsGarments />} />
      </Routes>
    </div>
  )
}

export default AppRouter