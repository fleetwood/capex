/* eslint-disable react/prop-types */

// Soft UI Dashboard React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

// Images
import logoJira from "assets/images/small-logos/logo-jira.svg";
// import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";

// Data
import data from "../../../data/projectsData";

const projectName = (name) => (
  <MDBox display="flex" alignItems="center" lineHeight={1}>
    <MDAvatar src={logoJira} size="sm" variant="rounded" />
    <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
      {name}
    </MDTypography>
  </MDBox>
);

const projectTeam = (team) => (
  <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
    {team}
  </MDTypography>
);

const projectEpic = (epic) => (
  <MDTypography
    component="a"
    href={`https://pelotoncycle.atlassian.net/browse/${epic}`}
    variant="caption"
    color="text"
    fontWeight="medium"
  >
    {epic}
  </MDTypography>
);

const projectStatus = (status) => (
  <MDTypography variant="caption" color="text" fontWeight="medium">
    {status}
  </MDTypography>
);

export default function projectsTable() {
  const columns = [
    { Header: "name", accessor: "name", align: "left" },
    { Header: "team", accessor: "team", align: "left" },
    { Header: "epic", accessor: "epic", align: "center" },
    { Header: "statuses", accessor: "statuses", align: "center" },
  ];

  const rows = [];
  data.forEach((project) => {
    rows.push({
      name: projectName(project.name),
      team: projectTeam(project.team),
      epic: projectEpic(project.epic),
      statuses: projectStatus(project.statuses),
    });
  });

  return { columns, rows };
}
