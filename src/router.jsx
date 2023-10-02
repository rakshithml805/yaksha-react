import { createBrowserRouter } from "react-router-dom";
import Layout from "./_shared/components/_layout/layout";
import Login from "./containers/Account/Login/Login";
import ForgotPassword from './containers/Account/ForgotPassword';
import ResetPassword from './containers/Account/ResetPassword';
import AdminDashboard from './containers/dashboard/AdminDashboard';
import TagsLists from './containers/manageResources/manageTags/tagsList';
import CreateTag from './containers/manageResources/manageTags/createTag';
import RoleList from './containers/manageResources/manageRoles/rolesList';
import CreateRole from "./containers/manageResources/manageRoles/createRole";
import UsersList from "./containers/tenantManagement/users/usersList";
import CreateUser from "./containers/tenantManagement/users/createUser";
import TenantsList from "./containers/tenantManagement/tenants/tenantsList";
import CreateTenant from "./containers/tenantManagement/tenants/createTenant";
import Reports from './containers/reports/Reports';
import QuestionBankList from "./containers/questionBankManagement/questionBankList";
import QuestionBankDetail from "./containers/questionBankManagement/questionBankDetail";
import CreateQuestionBank from "./containers/questionBankManagement/createQuestionBank";
import CreateQuestion from './containers/questionManagement/createQuestion';
import BulkUploadHistory from "./containers/questionManagement/bulkUploadHistory";
import QuestionsBulkUpload from "./containers/questionManagement/questionsBulkUpload";
import QuestionDetail from "./containers/questionBankManagement/questionDetail";
import QuestionReview from './containers/questionManagement/questionReview';
import AssessmentBanksList from './containers/assessmentManagement/assessmentBanksList';
import AssessmentBankDetail from './containers/assessmentManagement/assessmentBankDetail';
import CreateAssessmentBank from './containers/assessmentManagement/createAssessmentBank';
import AssessmentsOnReview from './containers/assessmentManagement/assessmentsOnReview';
const router = createBrowserRouter([
    // common
    {
        path: "/",
        element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "/reset-password",
      element: <ResetPassword />,
    },
    // routes as per persona
    {
      path: "/dashboard",
      element: (<Layout><AdminDashboard /></Layout> ),
    },
    {
      path: "/tags",
      element: (<Layout><TagsLists /></Layout> ),
    },
    {
      path: "/tags/create-tag",
      element: (<Layout><CreateTag /></Layout> ),
    },
    {
      path: "/roles",
      element: (<Layout><RoleList /></Layout> ),
    },
    {
      path: "/roles/create-role",
      element: (<Layout><CreateRole /></Layout> ),
    },
    {
      path: "/users",
      element: (<Layout><UsersList /></Layout> ),
    },
    {
      path: "/users/onboard-user",
      element: (<Layout><CreateUser /></Layout> ),
    },
    {
      path: "/tenants",
      element: (<Layout><TenantsList /></Layout> ),
    },
    {
      path: "/tenants/onboard-tenant",
      element: (<Layout><CreateTenant /></Layout> ),
    },
    {
      path: "/reports",
      element: (<Layout><Reports /></Layout> ),
    },
    {
      path: "/question-banks",
      element: (<Layout><QuestionBankList /></Layout> ),
    },
    // ::TODO:: question bank detail might have dynamic value in url
    {
      path: "/question-banks/question-bank-detail",
      element: (<Layout><QuestionBankDetail /></Layout> ),
    },
    // ::TODO:: question detail might have dynamic value in url
    {
      path: "/question-banks/question-bank-detail/question-detail",
      element: (<Layout><QuestionDetail /></Layout> ),
    },
    {
      path: "/question-banks/create-question-bank",
      element: (<Layout><CreateQuestionBank /></Layout> ),
    },
    {
      path: "/create-question",
      element: (<Layout><CreateQuestion /></Layout> ),
    },
    {
      path: "/bulk-upload-questions",
      element: (<Layout><QuestionsBulkUpload /></Layout> ),
    },
    {
      path: "/bulk-upload-history",
      element: (<Layout><BulkUploadHistory /></Layout> ),
    },
    {
      path: "/question-on-review",
      element: (<Layout><QuestionReview /></Layout> ),
    },
    {
      path: "/assessment-banks",
      element: (<Layout><AssessmentBanksList /></Layout> ),
    },
    // ::TODO:: assessment bank detail might have dynamic value in url
    {
      path: "/assessment-bank/assessment-bank-details",
      element: (<Layout><AssessmentBankDetail /></Layout> ),
    },
    {
      path: "/assessment-bank/create-assessment-bank",
      element: (<Layout><CreateAssessmentBank /></Layout> ),
    },
    {
      path: "/assessments-on-review",
      element: (<Layout><AssessmentsOnReview /></Layout> ),
    },
    {
      path: "/proctoring-settings",
      element: (<>Proctoring Settings</>),
    },
    {
      path: "/create-assessment",
      element: (<>Create Assessment</>),
    },
    {
      path: "/profile",
      element: (<>Profile</>),
    },
    {
      path: "/account-settings",
      element: (<>Account Settings</>),
    },
    {
      path: "/account-settings",
      element: (<>Account Settings</>),
    },
    {
      path: "*",
      element: (<>Page Not Found</>),
    },
]);
export default router;