/* eslint-disable no-unused-vars */
// prettier-ignore
/*!

=========================================================
* COVID Support Platform - GDG Pune
=========================================================

* Product Page: <TODO: Add URL>
* Copyright 2021 GDG Pune

* Coded by GDG Pune

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import HotelIcon from "@material-ui/icons/Hotel";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import Notifications from "@material-ui/icons/Notifications";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import Beds from "views/Beds/Beds.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import BedRegistration from "views/BedRegistration/BedRegistration.js";
import SpeakerNotesIcon from "@material-ui/icons/SpeakerNotes";
// core components/views for RTL layout

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  // {
  //   path: "/user",
  //   name: "User Profile",
  //   icon: Person,
  //   component: UserProfile,
  //   layout: "/admin",
  //   private: true,
  // },
  {
    path: "/beds",
    name: "Beds",
    icon: HotelIcon,
    component: Beds,
    layout: "/admin",
  },
  {
    path: "/addBed",
    name: "Add Information",
    icon: SpeakerNotesIcon,
    component: BedRegistration,
    layout: "/admin",
    private: true,
  },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: LibraryBooks,
  //   component: Typography,
  //   layout: "/admin",
  //   private: true,
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: BubbleChart,
  //   component: Icons,
  //   layout: "/admin",
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: Notifications,
  //   component: NotificationsPage,
  //   layout: "/admin",
  // },
];

export default dashboardRoutes;
