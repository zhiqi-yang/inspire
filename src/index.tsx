import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";

import { HashRouter, useRoutes } from "react-router-dom";

import getRouteData from "./routes/routes";

const [routes] = getRouteData();
const AppRoutes = () => {
  const element = useRoutes(routes);
  return element;
};


const rootElement = createRoot(document.getElementById("root")!);
rootElement.render(      
  <HashRouter>
    <Suspense fallback={<div>App Loading...</div>}>
      <AppRoutes />
    </Suspense>
  </HashRouter>
);