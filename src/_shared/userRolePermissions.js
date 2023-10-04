import { useParams } from "react-router-dom";
import { Role } from "./helper";

const useUserRolePermissions = () => {
  const { tenancyName } = useParams();
  const assesmentMenu = [
    {
      to: `/${tenancyName}/assessment-banks`,
      label: "Assessment Banks",
      roles: [Role.superAdmin, Role.tenantAdmin]
    },
    {
      to: `/${tenancyName}/create-assessment-bank`,
      label: "Create Assessment Bank",
      roles: [Role.superAdmin]
    },
    {
      to: `/${tenancyName}/create-assessment`,
      label: "Create Assessment",
      roles: [Role.superAdmin, Role.tenantAdmin, Role.author]
    },
    {
      to: `/${tenancyName}/assessment-drives`,
      label: "Assessment Drives",
      roles: [Role.superAdmin, Role.tenantAdmin]
    },
    {
      to: `/${tenancyName}/create-assessment-drive`,
      label: "Create Assessment Drive",
      roles: [Role.superAdmin, Role.tenantAdmin]
    },
    {
      to: `/${tenancyName}/assessments-on-review`,
      label: "Assessments On Review",
      roles: [Role.superAdmin, Role.tenantAdmin, Role.reviewer]
    },
    {
      to: `/${tenancyName}/proctoring-configuration`,
      label: "Proctoring Configuration",
      roles: [Role.superAdmin, Role.tenantAdmin]
    },
  ];
  const questionsMenu = [
    {
      to: `/${tenancyName}/question-banks`,
      label: "Question Banks",
      roles: [Role.superAdmin, Role.tenantAdmin]
    },
    {
      to: `/${tenancyName}/create-question-bank`,
      label: "Create Question Banks",
      roles: [Role.superAdmin]
    },
    {
      to: `/${tenancyName}/create-question`,
      label: "Create Question",
      roles: [Role.superAdmin, Role.tenantAdmin, Role.author]
    },
    {
      to: `/${tenancyName}/bulk-upload-questions`,
      label: "Bulk Upload Questions",
      roles: [Role.superAdmin, Role.tenantAdmin]
    },
    {
      to: `/${tenancyName}/bulk-upload-history`,
      label: "Bulk Upload History",
      roles: [Role.superAdmin, Role.tenantAdmin]
    },
    {
      to: `/${tenancyName}/questions-on-review`,
      label: "Questions on Review",
      roles: [Role.superAdmin, Role.tenantAdmin, Role.reviewer]
    },
  ];
  const tenantsMenu = [
    {
        to: `/${tenancyName}/tenants`,
        label: "Tenants",
        roles: [Role.superAdmin]
      },{
        to: `/${tenancyName}/tenants/onboard-tenant`,
        label: "Create Tenant",
        roles: [Role.superAdmin]
      },{
        to: `/${tenancyName}/users`,
        label: "Users",
        roles: [Role.superAdmin, Role.tenantAdmin]
      },{
        to: `/${tenancyName}/users/onboard-user`,
        label: "Create / Upload Users",
        roles: [Role.superAdmin, Role.tenantAdmin]
      },
  ]
  const resoursesMenu = [
    {
        to: `/${tenancyName}/tags`,
        label: "Manage Tags",
        roles: [Role.superAdmin, Role.tenantAdmin]
      },
      {
        to: `/${tenancyName}/roles`,
        label: "Manage Roles",
        roles: [Role.superAdmin, Role.tenantAdmin]
      }
  ];
  const profileMenu = [
        {
        to: `/${tenancyName}/profile`,
        label: "My Profile",
        roles: [Role.candidate]
      },
      {
        to: `/${tenancyName}/account-settings`,
        label: "Account Settings",
        roles: [Role.superAdmin, Role.tenantAdmin, Role.reviewer, Role.candidate]
      }
  ];
  const reportsMenu = [{
    to: `/${tenancyName}/reports`,
    label: "Reports",
    roles: [Role.superAdmin, Role.tenantAdmin]
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
