import * as React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.scss';
import ShowHeader from './components/showHeader/showHeader';
import ShowFooter from './components/showFooter/showFooter';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import AdminDashboard from './modules/dashboard/AdminDashboard';
import TagsLists from './modules/manageResources/manageTags/tagsList';
import Login from './Account/Login/login'
import ForgotPassword from './Account/forgotPassword/ForgotPassword';
import CreateTag from './modules/manageResources/manageTags/createTag';
import CreateQuestion from './modules/questionManagement/createQuestion';
import Tenants from './modules/tenantManagement/tenants/tenantsList';
import CreateTenant from './modules/tenantManagement/tenants/createTenant';
import UsersList from './modules/tenantManagement/users/usersList';
import CreateUser from './modules/tenantManagement/users/createUser';
import QuestionsBulkUpload from './modules/questionManagement/questionsBulkUpload';
import BulkUploadHistory from './modules/questionManagement/bulkUploadHistory';
import QuestionReview from './modules/questionManagement/questionReview';
import QuestionBankList from './modules/questionBankManagement/questionBankList';
import CreateQuestionBank from './modules/questionBankManagement/createQuestionBank';
import QuestionBankDetails from './modules/questionBankManagement/questionBankDetail';
import QuestionDetail from './modules/questionBankManagement/questionDetail';
import AssessmentBanksList from './modules/assessmentManagement/assessmentBanksList';
import CreateAssessmentBank from './modules/assessmentManagement/createAssessmentBank';
import AssessmentBankDetail from './modules/assessmentManagement/assessmentBankDetail';
import StartAssessment from './modules/assessment/startAssessment';
import AssessmentTestTracker from './modules/assessment/assessmentTestTracker';
import ResetPassword from './Account/ResetPassword/ResetPassword';
import AssessmentsOnReview from './modules/assessmentManagement/assessmentsOnReview';
import Reports from './modules/reports/Reports';
import CreateAssessment from './modules/assessmentManagement/createAssessment/createAssessment';
import RoleList from './modules/manageResources/manageRoles/rolesList';
import CreateRole from './modules/manageResources/manageRoles/createRole';

function App() {
  return (
    <BrowserRouter>
      <Box sx={{height:'100vh', display: 'flex', flexDirection:'column', justifyContent: 'space-between'}}>
        <ShowHeader>
          <Header />
        </ShowHeader>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/forgotPassword' element={<ForgotPassword/>} />
          <Route path='/resetPassword' element={<ResetPassword />} />
          <Route path='/dashboard' element={<AdminDashboard />} />
          <Route path="/tags" element={<TagsLists />} />
          <Route path="/create-tags" element={<CreateTag />} />
          <Route path="/roles" element={<RoleList />} />
          <Route path="/create-roles" element={<CreateRole />} />
          <Route path="/create-question" element={<CreateQuestion />} />
          <Route path="/tenants" element={<Tenants/>}/>
          <Route path="/create-tennant" element={<CreateTenant/>}/>
          <Route path="/users" element={<UsersList/>} />
          <Route path="/create-upload-users" element={<CreateUser/>} />
          <Route path="/bulk-upload-questions" element={<QuestionsBulkUpload />} />
          <Route path="/bulk-upload-history" element={<BulkUploadHistory />} />
          <Route path="/questions-on-review" element={<QuestionReview />} />
          <Route path="/question-banks" element={<QuestionBankList />} />
          <Route path="/create-question-bank" element={<CreateQuestionBank />} />
          <Route path="/question-bank-details" element={<QuestionBankDetails />} />
          <Route path="/question-detail" element={<QuestionDetail />} />
          <Route path="/assessment-banks" element={<AssessmentBanksList />} />
          <Route path="/create-assessment-bank" element={<CreateAssessmentBank />} />
          <Route path="/assessment-bank-detail" element={<AssessmentBankDetail/>} />
          <Route path="/start-assessment" element={<StartAssessment />} />
          <Route path="/assessment-test-tracker" element={<AssessmentTestTracker/>} />
          <Route path="/assessments-on-review" element={<AssessmentsOnReview />} />
          <Route path="/create-assessment" element={<CreateAssessment />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
        <ShowFooter>
          <Footer />
        </ShowFooter>
      </Box>
    </BrowserRouter>
  )
}

export default App
