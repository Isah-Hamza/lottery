import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Landing from '../src/pages/Landing';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import DashboardLayout from './layouts/DashboardLayout';
import AdminLayout from './layouts/AdminLayout';
import Admin from './pages/Admin'

function App() {
  const [count, setCount] = useState(0)

  return (
  // <Landing />
  <BrowserRouter>
    <Routes>
      <Route path='/' Component={Landing} />
      <Route path='/' Component={DashboardLayout} >
        <Route path='dashboard' Component={Dashboard} />
      </Route>
      <Route path='/' Component={AdminLayout} >
        <Route path='admin' Component={Admin} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
