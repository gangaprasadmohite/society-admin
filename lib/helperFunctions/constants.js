import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import BadgeIcon from "@mui/icons-material/Badge";
import BugReportIcon from "@mui/icons-material/BugReport";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";

export const routes = [
  {
    id: 1,
    path: "/company",
    name: "Company",
    children: [],
    icon: <EmojiTransportationIcon />,
  },
  {
    id: 2,
    path: "/project",
    name: "Projects",
    children: [],
    icon: <AccountTreeIcon />,
  },
  // {
  //   id: 3,
  //   path: "/building",
  //   name: "Buildings",
  //   children: [],
  // },
  // {
  //   id: 4,
  //   path: "/floor",
  //   name: "Floor",
  //   children: [],
  // },
  // {
  //   id: 5,
  //   path: "/unit",
  //   name: "Units",
  //   children: [],
  // },
  {
    id: 6,
    path: "/employee",
    name: "Employee",
    children: [],
    icon: <BadgeIcon />,
  },
  {
    id: 7,
    path: "/complaintmaster",
    name: "Complaint",
    children: [],
    icon: <BugReportIcon />,
  },
  {
    id: 7,
    path: "/occupant",
    name: "Occupant",
    children: [],
    icon: <OtherHousesIcon />,
  },
];
