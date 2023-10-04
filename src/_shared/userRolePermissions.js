import { useParams } from "react-router-dom";
import { Role } from "./helper";

const useUserRolePermissions = () => {
  const { tenancyName } = useParams();
  const assesmentMenu = [
    {
      to: `/${tenancyName}/assessment-banks`,
      label: "Assessment Banks",
    },
    {
      to: `/${tenancyName}/assessment-banks/create-assessment-bank`,
      label: "Create Assessment Banks",
    },
    {
      to: `/${tenancyName}/assessment-banks/create-assessment`,
      label: "Create Assessments",
    },
    {
      to: `/${tenancyName}/assessment-banks/assessment-drives`,
      label: "Assessment Drives",
    },
    {
      to: `/${tenancyName}/assessment-banks/create-assessment-drive`,
      label: "Create Assessment Drive",
    },
    {
      to: `/${tenancyName}/assessment-banks/assessments-on-review`,
      label: "Assessments On Review",
    },
    {
      to: `/${tenancyName}/assessment-banks/proctoring-configuration`,
      label: "Proctoring Configuration",
    },
  ];
  const questionsMenu = [
    {
      to: `/${tenancyName}/question-banks`,
      label: "Question Banks",
    },
    {
      to: `/${tenancyName}/question-banks/create-question-bank`,
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
    },
  ];
  const tenantsMenu = [
    {
        to: `/${tenancyName}/tenants`,
        label: "Tenants",
      },{
        to: `/${tenancyName}/create-tennant`,
        label: "Create Tenant",
      },{
        to: `/${tenancyName}/users`,
        label: "Users",
      },{
        to: `/${tenancyName}/create-upload-users`,
        label: "Create / Upload Users",
      },
  ]
  const superAdminPermissions = [
    {
      permisionKey: "Assessments.Manage.All",
      menu: "assessments",
      menuItem: assesmentMenu,
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
  ];
  const reviewerPermissions = [
    {
      permisionKey: "Tenant.Question.Reviewer.Manage.All",
      menu: "assessments",
      menuItems: [
        {
          to: `/${tenancyName}/assessments-on-review`,
          label: "Assessments On Review",
        },
        {
          to: `/${tenancyName}/questions-on-review`,
          label: "Questions on Review",
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
  getMenu.set(Role.reviewer, reviewerPermissions);
  return {
    getMenu,
    assesmentMenu,
    questionsMenu, tenantsMenu,
  };
};
export default useUserRolePermissions;
