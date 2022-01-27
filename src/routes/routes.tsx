import React from "react";
import AlertsPage from "@pages/alertas/AlertsPage";
import ConciliationsPage from "@pages/conciliaciones/ConciliationsPage";
import InterventionsPage from "@pages/intervenciones/InterventionsPage";
import ProfilePage from "@pages/profileFarmaco/ProfilePage";

export const routes = [
  { path: "/", element: <ProfilePage /> },
  { path: "intervenciones", element: <InterventionsPage /> },
  { path: "conciliaciones", element: <ConciliationsPage /> },
  { path: "alertas", element: <AlertsPage /> },
];
