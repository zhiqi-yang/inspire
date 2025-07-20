import React  from "react";
import { RouteObject } from "react-router-dom";

import lession from "./lession";



interface RouteSource {
  component: React.LazyExoticComponent<React.ComponentType<any>>;
}



const getRouteData = (): [RouteObject[], { [key: string]: RouteObject }] => {
  const data: Record<string, RouteSource> = {
    "/": {
      component: React.lazy(() => import(/* webpackChunkName: "lession4" */ "@/component/lession/Lession49")),
    },
    ...lession,
    "helloworld": {
      component: React.lazy(() => import(/* webpackChunkName: "helloworld" */ "@/component/helloworld")),
    },
    "*": {
      component: React.lazy(() => Promise.resolve({ default: () => <div>404 Not Found</div> })),
    },
  };

  const routes = [];
  const routeMap = {} as { [key: string]: RouteObject };

  for (const [k, { component }] of Object.entries(data)) {
    const item: RouteObject = {
      path: k,
      element: React.createElement(component),
    };
    routes.push(item);
    routeMap[k] = item;
  }

  return [routes, routeMap];
};

export default getRouteData;
