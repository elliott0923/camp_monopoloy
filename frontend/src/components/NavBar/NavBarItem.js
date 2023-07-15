import PeopleIcon from "@mui/icons-material/People";
import NotificationsIcon from "@mui/icons-material/Notifications";
import VillaIcon from "@mui/icons-material/Villa";
import PaidIcon from "@mui/icons-material/Paid";
import BuildIcon from "@mui/icons-material/Build";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import ForestOutlinedIcon from "@mui/icons-material/ForestOutlined"; // import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import EventIcon from "@mui/icons-material/Event";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import ConstructionIcon from "@mui/icons-material/Construction";
// import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import QuizIcon from "@mui/icons-material/Quiz";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import GavelIcon from "@mui/icons-material/Gavel";
import MapIcon from "@mui/icons-material/Map";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import HelpIcon from "@mui/icons-material/Help";

export const NavBarItems = [
  {
    id: 1,
    icon: <NotificationsIcon />,
    label: "Notifications",
    shortLabel: "Notifications",
    route: "notifications",
  },
  {
    id: 2,
    icon: <PeopleIcon />,
    label: "Teams",
    shortLabel: "Teams",
    route: "teams",
  },
  {
    id: 3,
    icon: <VillaIcon />,
    label: "Properties",
    shortLabel: "Properties",
    route: "properties",
  },
  {
    id: 4,
    icon: <MapIcon />,
    label: "Game Map",
    shortLabel: "Map",
    route: "map",
  },
];

export const NPCItems = [
  {
    id: 5,
    icon: <PaidIcon />,
    label: "Add Money",
    shortLabel: "Money",
    route: "addmoney",
  },
  {
    id: 6,
    icon: <RequestQuoteIcon />,
    label: "Set Ownership",
    shortLabel: "Ownership",
    route: "setownership",
  },
  {
    id: 7,
    icon: <CurrencyExchangeIcon />,
    label: "Transfer",
    shortLabel: "Transfer",
    route: "transfer",
  },
  // {
  //   id: 8,
  //   icon: <ConstructionIcon />,
  //   label: "Repair",
  //   shortLabel: "Repair",
  //   route: "setdice",
  // },
  {
    id: 11,
    icon: <ForestOutlinedIcon />,
    label: "Resource",
    shortLabel: "Resource",
    route: "resource",
  },
  {
    id: 14,
    icon: <QuizIcon />,
    label: "Random",
    shortLabel: "Random",
    route: "random",
  },
];

export const adminItems = [
  {
    id: 10,
    icon: <EventIcon />,
    label: "Event / Phase",
    shortLabel: "Event",
    route: "event",
  },
  {
    id: 11,
    icon: <ForestOutlinedIcon />,
    label: "Resource",
    shortLabel: "Resource",
    route: "resource",
  },
  {
    id: 12,
    icon: <BuildIcon />,
    label: "Team Info",
    shortLabel: "Team",
    route: "teams",
  },
  {
    id: 13,
    icon: <PaidIcon />,
    label: "Set Money",
    shortLabel: "Set",
    route: "setmoney",
  },
  {
    id: 14,
    icon: <VolumeUpIcon />,
    label: "Broadcast",
    shortLabel: "Broadcast",
    route: "broadcast",
  },
];

// export const Navigate = (path) => {
//   const { setNavBarId } = useContext(RoleContext);
//   const navigate = useNavigate();

//   const itemMap = {
//     ...NavBarItems,
//     ...NPCItems,
//     ...adminItems,
//   };
//   setNavBarId(itemMap.find((item) => item.route === path).id);

//   return () => navigate(path);
// };
