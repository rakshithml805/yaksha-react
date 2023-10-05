import { createBrowserRouter } from "react-router-dom";
import Layout from "./_shared/components/_layout/layout";
import Login from "./containers/Account/Login/Login";
import ForgotPassword from './containers/Account/ForgotPassword/ForgotPassword';
import ResetPassword from './containers/Account/ResetPassword/ResetPassword';
import Dashboard from './containers/dashboard/dashboard';
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
import PageNotFound from "./containers/pagenotfound/pagenotfound";
const router = createBrowserRouter([
    // common
    {
        path: "/",
        element: <Login />,
    },
    {
      path: ":tenancyName/login",
      element: <Login />,
    },
    {
      path: ":tenancyName/forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "/reset-password",
      element: <ResetPassword />,
    },
    // routes as per persona
    {
      path: ":tenancyName/dashboard",
      element: (<Layout><Dashboard /></Layout> ),
    },
    {
      path: ":tenancyName/tags",
      element: (<Layout><TagsLists /></Layout> ),
    },
    {
      path: ":tenancyName/tags/create-tag",
      element: (<Layout><CreateTag /></Layout> ),
    },
    {
      path: ":tenancyName/roles",
      element: (<Layout><RoleList /></Layout> ),
    },
    {
      path: ":tenancyName/roles/create-role",
      element: (<Layout><CreateRole /></Layout> ),
    },
    {
      path: ":tenancyName/users",
      element: (<Layout><UsersList /></Layout> ),
    },
    {
      path: ":tenancyName/users/onboard-user",
      element: (<Layout><CreateUser /></Layout> ),
    },
    {
      path: ":tenancyName/tenants",
      element: (<Layout><TenantsList /></Layout> ),
    },
    {
      path: ":tenancyName/tenants/onboard-tenant",
      element: (<Layout><CreateTenant /></Layout> ),
    },
    {
      path: ":tenancyName/reports",
      element: (<Layout><Reports /></Layout> ),
    },
    {
      path: ":tenancyName/question-banks",
      element: (<Layout><QuestionBankList /></Layout> ),
    },
    // ::TODO:: question bank detail might have dynamic value in url
    {
      path: ":tenancyName/question-banks/question-bank-detail",
      element: (<Layout><QuestionBankDetail /></Layout> ),
    },
    // ::TODO:: question detail might have dynamic value in url
    {
      path: ":tenancyName/question-banks/question-bank-detail/question-detail",
      element: (<Layout><QuestionDetail /></Layout> ),
    },
    {
      path: ":tenancyName/create-question-bank",
      element: (<Layout><CreateQuestionBank /></Layout> ),
    },
    {
      path: ":tenancyName/create-question",
      element: (<Layout><CreateQuestion /></Layout> ),
    },
    {
      path: ":tenancyName/bulk-upload-questions",
      element: (<Layout><QuestionsBulkUpload /></Layout> ),
    },
    {
      path: ":tenancyName/bulk-upload-history",
      element: (<Layout><BulkUploadHistory /></Layout> ),
    },
    {
      path: ":tenancyName/questions-on-review",
      element: (<Layout><QuestionReview /></Layout> ),
    },
    {
      path: ":tenancyName/assessment-banks",
      element: (<Layout><AssessmentBanksList /></Layout> ),
    },
    // ::TODO:: assessment bank detail might have dynamic value in url
    {
      path: ":tenancyName/assessment-banks/assessment-bank-detail",
      element: (<Layout><AssessmentBankDetail /></Layout> ),
    },
    {
      path: ":tenancyName/create-assessment-bank",
      element: (<Layout><CreateAssessmentBank /></Layout> ),
    },
    {
      path: ":tenancyName/assessments-on-review",
      element: (<Layout><AssessmentsOnReview /></Layout> ),
    },
    {
      path: ":tenancyName/proctoring-configuration",
      element: (<Layout>Proctoring Settings</Layout>),
    },
    {
      path: ":tenancyName/create-assessment",
      element: (<Layout>Create Assessment</Layout>),
    },
    {
      path: ":tenancyName/profile",
      element: (<Layout>Profile</Layout>),
    },
    {
      path: ":tenancyName/account-settings",
      element: (<Layout>Account Settings</Layout>),
    },
    {
      path: "*",
      element: (<PageNotFound />),
    },
]);
export default router;