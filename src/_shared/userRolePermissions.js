import { useParams } from "react-router-dom";
import { Role } from "./helper";

const useUserRolePermissions = () => {
  const { tenancyName } = useParams();
  const assesmentMenu = [
    {
      to: `/${tenancyName}/assessment-banks`,
      label: "Assessment Banks",
      roles: [Role.superAdmin]
    },
    {
      to: `/${tenancyName}/create-assessment-bank`,
      label: "Create Assessment Banks",
    },
    {
      to: `/${tenancyName}/create-assessment`,
      label: "Create Assessments",
    },
    {
      to: `/${tenancyName}/assessment-drives`,
      label: "Assessment Drives",
    },
    {
      to: `/${tenancyName}/create-assessment-drive`,
      label: "Create Assessment Drive",
    },
    {
      to: `/${tenancyName}/assessments-on-review`,
      label: "Assessments On Review",
      roles: [Role.superAdmin, Role.reviewer]
    },
    {
      to: `/${tenancyName}/proctoring-configuration`,
      label: "Proctoring Configuration",
    },
  ];
  const questionsMenu = [
    {
      to: `/${tenancyName}/question-banks`,
      label: "Question Banks",
    },
    {
      to: `/${tenancyName}/create-question-bank`,
      label: "Create Question Banks",
    },
    {
      to: `/${tenancyName}/create-question`,
      label: "Create Question",
    },
    {
      to: `/${tenancyName}/bulk-upload-questions`,
      label: "Bulk Upload Questions",
    },
    {
      to: `/${tenancyName}/bulk-upload-history`,
      label: "Bulk Upload History",
    },
    {
      to: `/${tenancyName}/questions-on-review`,
      label: "Questions on Review",
      roles: [Role.superAdmin, Role.reviewer]
    },
  ];
  const tenantsMenu = [
    {
        to: `/${tenancyName}/tenants`,
        label: "Tenants",
      },{
        to: `/${tenancyName}/tenants/onboard-tenant`,
        label: "Create Tenant",
      },{
        to: `/${tenancyName}/users`,
        label: "Users",
      },{
        to: `/${tenancyName}/users/onboard-user`,
        label: "Create / Upload Users",
      },
  ]
  const resoursesMenu = [
    {
        to: `/${tenancyName}/tags`,
        label: "Manage Tags",
      },
      {
        to: `/${tenancyName}/roles`,
        label: "Manage Roles",
      }
  ];
  const profileMenu = [
    {
        to: `/${tenancyName}/profile`,
        label: "My Profile",
      },
      {
        to: `/${tenancyName}/account-settings`,
        label: "Account Settings",
      }
  ];
  const superAdminPermissions = [
    {
      permisionKey: "Assessments.Manage.All",
      menu: "assessments",
      menuItems: assesmentMenu,
      menuLinks: [
        "/assessment-banks",
        "/create-assessment-bank",
        "/create-assessment",
        "/assessment-drives",
        "/create-assessment-drive",
        "/assessments-on-review",
        "/proctoring-configuration",
      ],
    },
    {
        permisionKey: "Question.Manage.All",
        menu: "questions", 
        menuItems: questionsMenu
    },
    {
        permisionKey: "Tenants.Manage.All",
        menu: "tenants", 
        menuItems: tenantsMenu
    },
    {
        permisionKey: "Assessments.Manage.All",
        menu: "resourses", 
        menuItems: resoursesMenu
    },
    {
        permisionKey: "Assessments.Manage.All",
        menu: "profile", 
        menuItems: profileMenu
    },
    {
        permisionKey: "Reports.Manage.All",
        menu: "reports",
    }
  ];
  const reviewerPermissions = [
    {
        permisionKey: "Tenant.Question.Reviewer.Manage.All",
        menu: "questions",
        menuItems: [
            {
              to: `/${tenancyName}/questions-on-review`,
              label: "Questions on Review",
            },
          ],  
    },
    {
      permisionKey: "Tenant.Question.Reviewer.Manage.All",
      menu: "assessments",
      menuItems: [
        {
            to: `/${tenancyName}/assessment-banks/assessments-on-review`,
          label: "Assessments On Review",
        },
      ],
      menuLinks: ["/assessments-on-review", "/questions-on-review"],
    },
    {
      menu: "dashboard",
      permisionKey: "Dashboard.Manage.All",
      menuItems: [
        {
          to: `/${tenancyName}/dashboard`,
          label: "Dashboard",
        },
      ],
      menuLinks: ["/dashboard"],
    },
  ];
  const getMenu = new Map();
  getMenu.set(Role.superAdmin, superAdminPermissions);  
  getMenu.set(Role.tenantAdmin, superAdminPermissions); // we need to set correct object
  getMenu.set(Role.tenantUser, superAdminPermissions); // we need to set correct object
  getMenu.set(Role.reviewer, reviewerPermissions);
  getMenu.set(Role.questionReviewer, superAdminPermissions); // we need to set correct object
  getMenu.set(Role.evaluator, superAdminPermissions); // we need to set correct object
  getMenu.set(Role.candidate, superAdminPermissions); // we need to set correct object
  getMenu.set(Role.author, superAdminPermissions); // we need to set correct object
  return {
    getMenu,
    assesmentMenu, questionsMenu, tenantsMenu, resoursesMenu, profileMenu, 
  };
};
export default useUserRolePermissions;
