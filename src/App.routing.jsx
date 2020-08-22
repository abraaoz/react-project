import React from "react";

import HomePage from "@pages/Home";
import NotFoundPage from "@pages/NotFound";

const routes = [
  {
    path: "/",
    exact: true,
    title: "Home",
    component: () => <HomePage />,
  },
  {
    path: "*",
    exact: false,
    title: "Page Not Found",
    component: () => <NotFoundPage />,
  },
];

export default routes;
