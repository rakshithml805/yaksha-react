import { useParams } from "react-router-dom";
import { Role } from "./helper";

const useUserRolePermissions = () => {
  const { tenancyName, tagId } = useParams();
  const assesmentMenu = [
    {
      to: `/${tenancyName}/assessment-banks`,
      label: "Assessment Banks",
      roles: [Role.superAdmin, Role.tenantAdmin],
      isMenu: true
    },
    {
      to: `/${tenancyName}/assessment-banks/assessment-bank-detail`,
      label: "Assessment Bank Detail",
      roles: [Role.superAdmin, Role.tenantAdmin],
      isMenu: false
    },
    {
      to: `/${tenancyName}/assessment-banks/assessment-bank-detail/assessment-details`,
      label: "Assessment Detail",
      roles: [Role.superAdmin, Role.tenantAdmin],
      isMenu: false
    },
    {
      to: `/${tenancyName}/create-assessment-bank`,
      label: "Create Assessment Bank",
      roles: [Role.superAdmin],
      isMenu: true
    },
    {
      to: `/${tenancyName}/create-assessment`,
      label: "Create Assessment",
      roles: [Role.superAdmin, Role.tenantAdmin, Role.author],
      isMenu: true
    },
    {
      to: `/${tenancyName}/assessment-drives`,
      label: "Assessment Drives",
      roles: [Role.superAdmin, Role.tenantAdmin],
      isMenu: true
    },
    {
      to: `/${tenancyName}/assessment-drives/assessment-drive-detail`,
      label: "Assessment Drive Detail",
      roles: [Role.superAdmin, Role.tenantAdmin],
      isMenu: false
    },
    {
      to: `/${tenancyName}/create-assessment-drives`,
      label: "Create Assessment Drive",
      roles: [Role.superAdmin, Role.tenantAdmin],
      isMenu: true
    },
    {
      to: `/${tenancyName}/assessments-on-review`,
      label: "Assessments On Review",
      roles: [Role.superAdmin, Role.tenantAdmin, Role.reviewer],
      isMenu: true
    },
    {
      to: `/${tenancyName}/proctoring-configuration`,
      label: "Proctoring Configuration",
      roles: [Role.superAdmin, Role.tenantAdmin],
      isMenu: true
    },
  ];
  const questionsMenu = [
    {
      to: `/${tenancyName}/question-banks`,
      label: "Question Banks",
      roles: [Role.superAdmin, Role.tenantAdmin],
      isMenu: true
    },
    {
      to: `/${tenancyName}/question-banks/question-bank-detail`,
      label: "Question bank detail",
      roles: [Role.superAdmin, Role.tenantAdmin],
      isMenu: false
    },
    {
      to: `/${tenancyName}/question-banks/question-bank-detail/question-detail`,
      label: "Question detail",
      roles: [Role.superAdmin, Role.tenantAdmin, Role.reviewer],
      isMenu: false
    },
    {
      to: `/${tenancyName}/create-question-bank`,
      label: "Create Question Banks",
      roles: [Role.superAdmin],
      isMenu: true
    },
    {
      to: `/${tenancyName}/create-question`,
      label: "Create Question",
      roles: [Role.superAdmin, Role.tenantAdmin, Role.author],
      isMenu: true
    },
    {
      to: `/${tenancyName}/bulk-upload-questions`,
      label: "Bulk Upload Questions",
      roles: [Role.superAdmin, Role.tenantAdmin],
      isMenu: true
    },
    {
      to: `/${tenancyName}/bulk-upload-history`,
      label: "Bulk Upload History",
      roles: [Role.superAdmin, Role.tenantAdmin],
      isMenu: true
    },
    {
      to: `/${tenancyName}/questions-on-review`,
      label: "Questions on Review",
      roles: [Role.superAdmin, Role.tenantAdmin, Role.reviewer],
      isMenu: true
    }
  ];
  const tenantsMenu = [
    {
        to: `/${tenancyName}/tenants`,
        label: "Tenants",
        roles: [Role.superAdmin],
        isMenu: true
      },{
        to: `/${tenancyName}/tenants/onboard-tenant`,
        label: "Create Tenant",
        roles: [Role.superAdmin],
        isMenu: true
      },{
        to: `/${tenancyName}/users`,
        label: "Users",
        roles: [Role.superAdmin, Role.tenantAdmin],
        isMenu: true
      },
      {
        to: `/${tenancyName}/users/user-profile`,
        label: "User Profile",
        roles: [Role.superAdmin, Role.tenantAdmin],
        isMenu: false
      },{
        to: `/${tenancyName}/users/onboard-user`,
        label: "Create / Upload Users",
        roles: [Role.superAdmin, Role.tenantAdmin],
        isMenu: true
      },
  ]
  const resoursesMenu = [
    {
        to: `/${tenancyName}/tags`,
        label: "Manage Tags",
        roles: [Role.superAdmin, Role.tenantAdmin],
        isMenu: true
      },
      {
        to: `/${tenancyName}/tags/edit-tag/${tagId}`,
        label: "Edit Category",
        roles: [Role.superAdmin, Role.tenantAdmin],
        isMenu: false
      },
      {
        to: `/${tenancyName}/tags/create-tag`,
        label: "Create Tag",
        roles: [Role.superAdmin, Role.tenantAdmin],
        isMenu: false
      },
      {
        to: `/${tenancyName}/roles`,
        label: "Manage Roles",
        roles: [Role.superAdmin, Role.tenantAdmin],
        isMenu: true
      },
      {
        to: `/${tenancyName}/roles/create-role`,
        label: "Manage Roles",
        roles: [Role.superAdmin, Role.tenantAdmin],
        isMenu: false
      }
  ];
  const profileMenu = [
        {
        to: `/${tenancyName}/profile`,
        label: "My Profile",
        roles: [Role.candidate],
        isMenu: true
      },
      {
        to: `/${tenancyName}/account-settings`,
        label: "Account Settings",
        roles: [Role.superAdmin, Role.tenantAdmin, Role.reviewer, Role.candidate],
        isMenu: true
      }
  ];
  const reportsMenu = [{
    to: `/${tenancyName}/reports`,
    label: "Reports",
    roles: [Role.superAdmin, Role.tenantAdmin],
    isMenu: true
  }];
//   const superAdminPermissions = [
//     {
//       permisionKey: "Assessments.Manage.All",
//       menu: "assessments",
//       menuItems: assesmentMenu
//     },
//     {
//         permisionKey: "Question.Manage.All",
//         menu: "questions", 
//         menuItems: questionsMenu
//     },
//     {
//         permisionKey: "Tenants.Manage.All",
//         menu: "tenants", 
//         menuItems: tenantsMenu
//     },
//     {
//         permisionKey: "Assessments.Manage.All",
//         menu: "resourses", 
//         menuItems: resoursesMenu
//     },
//     {
//         permisionKey: "Assessments.Manage.All",
//         menu: "profile", 
//         menuItems: profileMenu
//     },
//     {
//         permisionKey: "Reports.Manage.All",
//         menu: "reports",
//     }
//   ];
//   const reviewerPermissions = [
//     {
//         permisionKey: "Tenant.Question.Reviewer.Manage.All",
//         menu: "questions",
//         menuItems: [
//             {
//               to: `/${tenancyName}/questions-on-review`,
//               label: "Questions on Review",
//             },
//           ],  
//     },
//     {
//       permisionKey: "Tenant.Question.Reviewer.Manage.All",
//       menu: "assessments",
//       menuItems: [
//         {
//             to: `/${tenancyName}/assessments-on-review`,
//           label: "Assessments On Review",
//         },
//       ],
//     },
//     {
//       menu: "dashboard",
//       permisionKey: "Dashboard.Manage.All",
//       menuItems: [
//         {
//           to: `/${tenancyName}/dashboard`,
//           label: "Dashboard",
//         },
//       ]
//     },
//   ];
//   const getMenu = new Map();
//   getMenu.set(Role.superAdmin, superAdminPermissions);  
//   getMenu.set(Role.tenantAdmin, superAdminPermissions); // we need to set correct object
//   getMenu.set(Role.tenantUser, superAdminPermissions); // we need to set correct object
//   getMenu.set(Role.reviewer, reviewerPermissions);
//   getMenu.set(Role.questionReviewer, superAdminPermissions); // we need to set correct object
//   getMenu.set(Role.evaluator, superAdminPermissions); // we need to set correct object
//   getMenu.set(Role.candidate, superAdminPermissions); // we need to set correct object
//   getMenu.set(Role.author, superAdminPermissions); // we need to set correct object
  return {
    assesmentMenu, questionsMenu, tenantsMenu, resoursesMenu, profileMenu, reportsMenu
  };
};
export default useUserRolePermissions;
