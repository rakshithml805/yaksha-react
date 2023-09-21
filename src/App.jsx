import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.scss'
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import AdminDashboard from './modules/dashboard/AdminDashboard';
import TagsLists from './modules/manageResources/manageTags/tagsList';
import Login from './Account/Login/login'
import ForgotPassword from './Account/forgotPassword/ForgotPassword';
import CreateTag from './modules/manageResources/manageTags/createTag';
import UsersList from './modules/tenantManagement/users/usersList';
import CreateUser from './modules/tenantManagement/users/createUser';
import QuestionsBulkUpload from './modules/questionManagement/questionsBulkUpload';
import BulkUploadHistory from './modules/questionManagement/bulkUploadHistory';
import QuestionReview from './modules/questionManagement/questionReview';
import QuestionBankList from './modules/questionBankManagement/questionBankList';
import CreateQuestionBank from './modules/questionBankManagement/createQuestionBank';
import QuestionBankDetails from './modules/questionBankManagement/questionBankDetail';
import QuestionDetail from './modules/questionBankManagement/questionDetail';

function App() {
  return (
    <BrowserRouter>
      <Box sx={{height:'100vh', display: 'flex', flexDirection:'column', justifyContent: 'space-between'}}>
        <Header />
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/forgotPassword' element={<ForgotPassword/>} />
          <Route path='/dashboard' element={<AdminDashboard />} />
          <Route path="/tags" element={<TagsLists />} />
          <Route path="/create-tags" element={<CreateTag />} />
          <Route path="/users" element={<UsersList/>} />
          <Route path="/create-upload-users" element={<CreateUser/>} />
          <Route path="/bulk-upload-questions" element={<QuestionsBulkUpload />} />
          <Route path="/bulk-upload-history" element={<BulkUploadHistory />} />
          <Route path="/questions-on-review" element={<QuestionReview />} />
          <Route path="/question-banks" element={<QuestionBankList />} />
          <Route path="/create-question-bank" element={<CreateQuestionBank />} />
          <Route path="/question-bank-details" element={<QuestionBankDetails />} />
          <Route path="/question-detail" element={<QuestionDetail />} />
        </Routes>
        <Footer />
      </Box>
    </BrowserRouter>
  )
}

export default App
