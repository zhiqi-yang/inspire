import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";

import { HashRouter, useRoutes } from "react-router-dom";

import getRouteData from "./routes/routes";

import Header from "@/component/layout/Header";
import Body from "@/component/layout/Body";

const [routes] = getRouteData();
const AppRoutes = () => {
  const element = useRoutes(routes);
  return element;
};


const rootElement = createRoot(document.getElementById("root")!);
rootElement.render(    
  <>
    <Header />
    <Body>
      <HashRouter>
        <Suspense fallback={<div>App Loading...</div>}>
          <AppRoutes />
        </Suspense>
      </HashRouter>
    </Body>
  </>  

);







