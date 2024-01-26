import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Login = React.lazy(() => import('./components/Login'))
const ChatRoom = React.lazy(() => import('./components/ChatRoom'))

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path='/login' />
        <Route element={<ChatRoom />} path='/' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
