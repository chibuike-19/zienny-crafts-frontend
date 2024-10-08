import { Suspense, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { routes } from './utils/Routes/routes';

function App() {


  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App
