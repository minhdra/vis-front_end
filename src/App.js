import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// layouts

import Admin from './layouts/Admin.js';
import Auth from './layouts/Auth.js';

// views without layouts

import Landing from './views/Landing.js';
import Profile from './views/Profile.js';

// Views
import Dashboard from './views/admin/Dashboard';
import Maps from './views/admin/Maps';
import Settings from './views/admin/Settings';
import Tables from './views/admin/Tables';
import Users from './views/admin/Users';
import Products from './views/admin/Products.js';

// Landing pages
import Login from './views/auth/Login';
import Register from './views/auth/Register';
import Slides from './views/admin/Slides.js';
import Services from './views/admin/Service.js';

export default function App() {
  const [title, setTitle] = useState('VN-Inspection - Admin');

  useEffect(() => {
    window.document.title = title;
  }, [title]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* add routes with layouts */}
          <Route element={<Admin />}>
            {/* <Route index path='/admin/dashboard' element={<Dashboard setTitle={setTitle} />} /> */}
            <Route path='/admin/maps' element={<Maps setTitle={setTitle} />} />
            <Route path='/admin/settings' element={<Settings setTitle={setTitle} />} />
            <Route path='/admin/tables' element={<Tables setTitle={setTitle} />} />
            <Route index path='/admin/products' element={<Products setTitle={setTitle} />} />
            <Route path='/admin/users' element={<Users setTitle={setTitle} />} />
            <Route path='/admin/slides' element={<Slides setTitle={setTitle} />} />
            <Route path='/admin/services' element={<Services setTitle={setTitle} />} />
          </Route>
          <Route element={<Auth />}>
            <Route index path='/auth/login' element={<Login setTitle={setTitle} />} />
            <Route path='/auth/register' element={<Register setTitle={setTitle} />} />
          </Route>
          {/* add routes without layouts */}
          <Route path='/landing' exact element={<Landing setTitle={setTitle} />} />
          <Route path='/profile' exact element={<Profile setTitle={setTitle} />} />
          {/* add redirect for first page */}
          {/* <Route path="*" element={<Navigate to="/admin"/>}/> */}
          <Route
            path='*'
            element={<Navigate to='/admin/products' replace />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
