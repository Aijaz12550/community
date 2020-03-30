import { ViewResident } from "../viewResidents";

export let routes = [
  {
    path: "view_residents",
    name: "View Residents",
    component: <ViewResident />,
    icon: "fas fa-home"
  },
  {
    path: "invite_residents",
    name: "Invite Residents",
    component: <p> hello seond 222222</p>,
    icon: "fas fa-home"
  },
  {
    path: "invite_members",
    name: "Invite Members",
    component: <p>Hello 3333333</p>,
    icon: "fas fa-users"
  },
  {
    path: "manage_members",
    name: "Manage Members",
    component: <p> hello seond 444444444444</p>,
    icon: "fas fa-users"
  },
  {
    path: "managae_documents",
    name: "Manage Documents",
    component: <p>Manage Component</p>,
    icon: "fas fa-file"
  },
  {
    path: "send_communication",
    name: "Send Communication",
    component: <p> communication</p>,
    icon: "fas fa-phone"
  }
];
