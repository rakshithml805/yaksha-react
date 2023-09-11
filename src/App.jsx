import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.scss'
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import AdminDashboard from './modules/dashboard/AdminDashboard';
import TagsLists from './modules/manageResources/manageTags/tagsList';

function App() {
  return (
    <BrowserRouter>
      <Box sx={{height:'100vh', display: 'flex', flexDirection:'column', justifyContent: 'space-between'}}>
        <Header />
        <Routes>
          <Route path='/' element={<AdminDashboard />} />
          <Route path="/tags" element={<TagsLists />} />
        </Routes>
        <Footer />
      </Box>
    </BrowserRouter>
  )
}

export default App
