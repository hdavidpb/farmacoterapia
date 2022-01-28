import React from "react";
import AlertsPage from "@pages/alertas/AlertsPage";
import ConciliationsPage from "@pages/conciliaciones/ConciliationsPage";
import InterventionsPage from "@pages/intervenciones/InterventionsPage";
import ProfilePage from "@pages/profileFarmaco/ProfilePage";
import { useRoutes } from "react-router-dom";
import ProfileDetail from "@pages/profileFarmaco/profileDetails/ProfileDetail";

export const routes = [
  {
    path: "profile",
    element: <ProfilePage />,
  },
  { path: "profile/:id", element: <ProfileDetail /> },
  { path: "intervenciones", element: <InterventionsPage /> },
  { path: "conciliaciones", element: <ConciliationsPage /> },
  { path: "alertas-sanitarias", element: <AlertsPage /> },
  { path: "*", element: <h1>Not found</h1> },
];

export const Routes = () => {
  let element = useRoutes(routes);

  return element;
};
