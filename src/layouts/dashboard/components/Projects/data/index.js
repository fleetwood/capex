/* eslint-disable react/prop-types */
// @mui material components
import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

// Images
// import logoXD from "assets/images/small-logos/logo-xd.svg";
// import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
// import logoSlack from "assets/images/small-logos/logo-slack.svg";
// import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
// import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
// Icons
import { Icon } from "@mui/material";
import CheckCircleSharpIcon from "@mui/icons-material/CheckCircleSharp";
import CheckCircleOutlineSharpIcon from "@mui/icons-material/CheckCircleOutlineSharp";
import CancelSharpIcon from "@mui/icons-material/CancelSharp";
import HelpOutlineSharpIcon from "@mui/icons-material/HelpOutlineSharp";

export default function data() {
  const avatars = (engineers) =>
    engineers.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <MDAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { white } }) =>
              `${borderWidth[2]} solid ${white.main}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  const impairment = {
    full: "full",
    partial: "partial",
    keep: "keep",
    default: "default",
  };

  const impairments = {
    keep: {
      icon: CheckCircleSharpIcon,
      status: "Still in use",
      note: "0% written off",
      color: "success",
    },
    partial: {
      icon: CheckCircleOutlineSharpIcon,
      status: "Partially in use",
      note: "50% written off",
      color: "warning",
    },
    full: {
      icon: CancelSharpIcon,
      status: "No longer in use",
      note: "100% written off",
      color: "error",
    },
    default: {
      icon: HelpOutlineSharpIcon,
      status: "N/A",
      note: "",
      color: "text",
    },
  };

  const teams = {
    shop: {
      image: "https://ca.slack-edge.com/E0160NTJ2PM-U01C9PWKZA5-22d8023dc09a-72",
      em: "Ethan Fuchs",
      name: "SHOP",
    },
    tofu: {
      image: "https://ca.slack-edge.com/E0160NTJ2PM-UMT3TKM6H-854651f36196-512",
      em: "Fleetwood",
      name: "TOFU",
    },
    ox: {
      image: "https://ca.slack-edge.com/E0160NTJ2PM-U01CL51RVPA-1dc3b0202a1b-72",
      em: "Solomon Bisker",
      name: "OX",
    },
    rambo: {
      image: "https://ca.slack-edge.com/E0160NTJ2PM-U01BU2ZNMN1-f5a23c19a803-72",
      em: "Jeremy Warach",
      name: "RAMBO",
    },
  };

  const Status = ({ setTo = "default" }) => {
    const status = impairments[setTo];
    return (
      <MDTypography variant="caption" size="sm" color={status.color}>
        <Icon component={status.icon} /> &nbsp; <strong>{status.status}</strong>
        <br /> {status.note}
      </MDTypography>
    );
  };

  const Initiative = ({ image, name, color = "text" }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="m" />
      <MDTypography variant="button" color={color} fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  const Team = ({ team }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={team.image} name={team.em} size="xs" />
      <MDTypography variant="button" fontWeight="light" ml={1} lineHeight={1}>
        {team.name}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "initiatives", accessor: "initiatives", align: "left" },
      { Header: "team", accessor: "team", align: "left" },
      { Header: "engineers", accessor: "engineers", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "completion", accessor: "completion", align: "center" },
    ],

    rows: [
      {
        initiatives: (
          <Initiative
            image={logoJira}
            name="Material UI XD Version"
            color={impairments.full.color}
          />
        ),
        team: <Team team={teams.ox} />,
        engineers: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],
              [team2, "Romina Hadid"],
              [team3, "Alexander Smith"],
              [team4, "Jessica Doe"],
              [team1, "Ryan Tompson"],
              [team2, "Romina Hadid"],
              [team3, "Alexander Smith"],
              [team4, "Jessica Doe"],
            ])}
          </MDBox>
        ),
        status: <Status setTo={impairment.full} />,
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={60} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        initiatives: (
          <Initiative image={logoJira} name="Add Progress Track" color={impairments.keep.color} />
        ),
        team: <Team team={teams.tofu} />,
        engineers: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team2, "Romina Hadid"],
              [team4, "Jessica Doe"],
              [team4, "Jessica Doe"],
              [team1, "Ryan Tompson"],
              [team2, "Romina Hadid"],
              [team3, "Alexander Smith"],
              [team4, "Jessica Doe"],
              [team1, "Ryan Tompson"],
              [team2, "Romina Hadid"],
              [team3, "Alexander Smith"],
              [team4, "Jessica Doe"],
              [team1, "Ryan Tompson"],
              [team2, "Romina Hadid"],
              [team3, "Alexander Smith"],
              [team4, "Jessica Doe"],
              [team1, "Ryan Tompson"],
              [team2, "Romina Hadid"],
              [team3, "Alexander Smith"],
            ])}
          </MDBox>
        ),
        status: <Status setTo={impairment.keep} />,
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={10} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        initiatives: (
          <Initiative image={logoJira} name="Fix Platform Errors" color={impairments.keep.color} />
        ),
        team: <Team team={teams.rambo} />,
        engineers: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],
              [team3, "Alexander Smith"],
            ])}
          </MDBox>
        ),
        status: <Status setTo={impairment.keep} />,
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={100} color="success" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        initiatives: (
          <Initiative
            image={logoJira}
            name="Launch our Mobile App"
            color={impairments.partial.color}
          />
        ),
        team: <Team team={teams.rambo} />,
        engineers: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team4, "Jessica Doe"],
              [team3, "Alexander Smith"],
              [team2, "Romina Hadid"],
              [team1, "Ryan Tompson"],
            ])}
          </MDBox>
        ),
        status: <Status setTo={impairment.partial} />,
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={100} color="success" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        initiatives: <Initiative image={logoJira} name="Add the New Pricing Page" />,
        team: <Team team={teams.tofu} />,
        engineers: (
          <MDBox display="flex" py={1}>
            {avatars([[team4, "Jessica Doe"]])}
          </MDBox>
        ),
        status: <Status />,
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={25} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        initiatives: (
          <Initiative
            image={logoJira}
            name="Redesign New Online Shop"
            color={impairments.full.color}
          />
        ),
        team: <Team team={teams.shop} />,
        engineers: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],
              [team4, "Jessica Doe"],
            ])}
          </MDBox>
        ),
        status: <Status setTo={impairment.full} />,
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={40} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        initiatives: (
          <Initiative
            image={logoJira}
            name="Launch our Mobile App"
            color={impairments.partial.color}
          />
        ),
        team: <Team team={teams.rambo} />,
        engineers: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team4, "Jessica Doe"],
              [team3, "Alexander Smith"],
              [team2, "Romina Hadid"],
              [team1, "Ryan Tompson"],
            ])}
          </MDBox>
        ),
        status: <Status setTo={impairment.partial} />,
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={100} color="success" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        initiatives: <Initiative image={logoJira} name="Add the New Pricing Page" />,
        team: <Team team={teams.tofu} />,
        engineers: (
          <MDBox display="flex" py={1}>
            {avatars([[team4, "Jessica Doe"]])}
          </MDBox>
        ),
        status: <Status />,
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={25} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        initiatives: (
          <Initiative
            image={logoJira}
            name="Redesign New Online Shop"
            color={impairments.full.color}
          />
        ),
        team: <Team team={teams.shop} />,
        engineers: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],
              [team4, "Jessica Doe"],
            ])}
          </MDBox>
        ),
        status: <Status setTo={impairment.full} />,
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={40} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        initiatives: (
          <Initiative
            image={logoJira}
            name="Launch our Mobile App"
            color={impairments.partial.color}
          />
        ),
        team: <Team team={teams.rambo} />,
        engineers: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team4, "Jessica Doe"],
              [team3, "Alexander Smith"],
              [team2, "Romina Hadid"],
              [team1, "Ryan Tompson"],
            ])}
          </MDBox>
        ),
        status: <Status setTo={impairment.partial} />,
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={100} color="success" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        initiatives: <Initiative image={logoJira} name="Add the New Pricing Page" />,
        team: <Team team={teams.tofu} />,
        engineers: (
          <MDBox display="flex" py={1}>
            {avatars([[team4, "Jessica Doe"]])}
          </MDBox>
        ),
        status: <Status />,
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={25} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        initiatives: (
          <Initiative
            image={logoJira}
            name="Redesign New Online Shop"
            color={impairments.full.color}
          />
        ),
        team: <Team team={teams.shop} />,
        engineers: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],
              [team4, "Jessica Doe"],
            ])}
          </MDBox>
        ),
        status: <Status setTo={impairment.full} />,
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={40} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        initiatives: (
          <Initiative
            image={logoJira}
            name="Launch our Mobile App"
            color={impairments.partial.color}
          />
        ),
        team: <Team team={teams.rambo} />,
        engineers: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team4, "Jessica Doe"],
              [team3, "Alexander Smith"],
              [team2, "Romina Hadid"],
              [team1, "Ryan Tompson"],
            ])}
          </MDBox>
        ),
        status: <Status setTo={impairment.partial} />,
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={100} color="success" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        initiatives: <Initiative image={logoJira} name="Add the New Pricing Page" />,
        team: <Team team={teams.tofu} />,
        engineers: (
          <MDBox display="flex" py={1}>
            {avatars([[team4, "Jessica Doe"]])}
          </MDBox>
        ),
        status: <Status />,
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={25} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        initiatives: (
          <Initiative
            image={logoJira}
            name="Redesign New Online Shop"
            color={impairments.full.color}
          />
        ),
        team: <Team team={teams.shop} />,
        engineers: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],
              [team4, "Jessica Doe"],
            ])}
          </MDBox>
        ),
        status: <Status setTo={impairment.full} />,
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={40} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        initiatives: (
          <Initiative
            image={logoJira}
            name="Launch our Mobile App"
            color={impairments.partial.color}
          />
        ),
        team: <Team team={teams.rambo} />,
        engineers: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team4, "Jessica Doe"],
              [team3, "Alexander Smith"],
              [team2, "Romina Hadid"],
              [team1, "Ryan Tompson"],
            ])}
          </MDBox>
        ),
        status: <Status setTo={impairment.partial} />,
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={100} color="success" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        initiatives: <Initiative image={logoJira} name="Add the New Pricing Page" />,
        team: <Team team={teams.tofu} />,
        engineers: (
          <MDBox display="flex" py={1}>
            {avatars([[team4, "Jessica Doe"]])}
          </MDBox>
        ),
        status: <Status />,
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={25} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        initiatives: (
          <Initiative
            image={logoJira}
            name="Redesign New Online Shop"
            color={impairments.full.color}
          />
        ),
        team: <Team team={teams.shop} />,
        engineers: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],
              [team4, "Jessica Doe"],
            ])}
          </MDBox>
        ),
        status: <Status setTo={impairment.full} />,
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={40} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        initiatives: (
          <Initiative
            image={logoJira}
            name="Launch our Mobile App"
            color={impairments.partial.color}
          />
        ),
        team: <Team team={teams.rambo} />,
        engineers: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team4, "Jessica Doe"],
              [team3, "Alexander Smith"],
              [team2, "Romina Hadid"],
              [team1, "Ryan Tompson"],
            ])}
          </MDBox>
        ),
        status: <Status setTo={impairment.partial} />,
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={100} color="success" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        initiatives: <Initiative image={logoJira} name="Add the New Pricing Page" />,
        team: <Team team={teams.tofu} />,
        engineers: (
          <MDBox display="flex" py={1}>
            {avatars([[team4, "Jessica Doe"]])}
          </MDBox>
        ),
        status: <Status />,
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={25} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        initiatives: (
          <Initiative
            image={logoJira}
            name="Redesign New Online Shop"
            color={impairments.full.color}
          />
        ),
        team: <Team team={teams.shop} />,
        engineers: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],
              [team4, "Jessica Doe"],
            ])}
          </MDBox>
        ),
        status: <Status setTo={impairment.full} />,
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={40} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        initiatives: (
          <Initiative
            image={logoJira}
            name="Launch our Mobile App"
            color={impairments.partial.color}
          />
        ),
        team: <Team team={teams.rambo} />,
        engineers: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team4, "Jessica Doe"],
              [team3, "Alexander Smith"],
              [team2, "Romina Hadid"],
              [team1, "Ryan Tompson"],
            ])}
          </MDBox>
        ),
        status: <Status setTo={impairment.partial} />,
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={100} color="success" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        initiatives: <Initiative image={logoJira} name="Add the New Pricing Page" />,
        team: <Team team={teams.tofu} />,
        engineers: (
          <MDBox display="flex" py={1}>
            {avatars([[team4, "Jessica Doe"]])}
          </MDBox>
        ),
        status: <Status />,
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={25} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        initiatives: (
          <Initiative
            image={logoJira}
            name="Redesign New Online Shop"
            color={impairments.full.color}
          />
        ),
        team: <Team team={teams.shop} />,
        engineers: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],
              [team4, "Jessica Doe"],
            ])}
          </MDBox>
        ),
        status: <Status setTo={impairment.full} />,
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={40} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        initiatives: (
          <Initiative
            image={logoJira}
            name="Launch our Mobile App"
            color={impairments.partial.color}
          />
        ),
        team: <Team team={teams.rambo} />,
        engineers: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team4, "Jessica Doe"],
              [team3, "Alexander Smith"],
              [team2, "Romina Hadid"],
              [team1, "Ryan Tompson"],
            ])}
          </MDBox>
        ),
        status: <Status setTo={impairment.partial} />,
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={100} color="success" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        initiatives: <Initiative image={logoJira} name="Add the New Pricing Page" />,
        team: <Team team={teams.tofu} />,
        engineers: (
          <MDBox display="flex" py={1}>
            {avatars([[team4, "Jessica Doe"]])}
          </MDBox>
        ),
        status: <Status />,
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={25} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        initiatives: (
          <Initiative
            image={logoJira}
            name="Redesign New Online Shop"
            color={impairments.full.color}
          />
        ),
        team: <Team team={teams.shop} />,
        engineers: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],
              [team4, "Jessica Doe"],
            ])}
          </MDBox>
        ),
        status: <Status setTo={impairment.full} />,
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={40} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        initiatives: (
          <Initiative
            image={logoJira}
            name="Launch our Mobile App"
            color={impairments.partial.color}
          />
        ),
        team: <Team team={teams.rambo} />,
        engineers: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team4, "Jessica Doe"],
              [team3, "Alexander Smith"],
              [team2, "Romina Hadid"],
              [team1, "Ryan Tompson"],
            ])}
          </MDBox>
        ),
        status: <Status setTo={impairment.partial} />,
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={100} color="success" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        initiatives: <Initiative image={logoJira} name="Add the New Pricing Page" />,
        team: <Team team={teams.tofu} />,
        engineers: (
          <MDBox display="flex" py={1}>
            {avatars([[team4, "Jessica Doe"]])}
          </MDBox>
        ),
        status: <Status />,
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={25} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        initiatives: (
          <Initiative
            image={logoJira}
            name="Redesign New Online Shop"
            color={impairments.full.color}
          />
        ),
        team: <Team team={teams.shop} />,
        engineers: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],
              [team4, "Jessica Doe"],
            ])}
          </MDBox>
        ),
        status: <Status setTo={impairment.full} />,
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={40} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
    ],
  };
}
