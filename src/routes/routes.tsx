import React from "react";
import AlertsPage from "@pages/alertas/AlertsPage";
import ConciliationsPage from "@pages/conciliaciones/ConciliationsPage";
import InterventionsPage from "@pages/intervenciones/InterventionsPage";
import ProfilePage from "@pages/profileFarmaco/ProfilePage";
import { useRoutes } from "react-router-dom";

export const routes = [
  { path: "/profile", element: <ProfilePage /> },
  { path: "intervenciones", element: <InterventionsPage /> },
  { path: "conciliaciones", element: <ConciliationsPage /> },
  { path: "alertas-sanitarias", element: <AlertsPage /> },
];

export const Routes = () => {
  let element = useRoutes(routes);

  return element;
};
