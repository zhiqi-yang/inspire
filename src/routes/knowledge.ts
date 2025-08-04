import React from "react";

export default {

  "knowledge/title": {
    component: React.lazy(() => import( "@/component/knowledge/Title")),
  },

  "knowledge/markdown": {
    component: React.lazy(() => import( "@/component/knowledge/MarkdownCode")),
  },

  "knowledge/display/flex": {
    component: React.lazy(() => import( "@/component/knowledge/display/Flex")),
  },


};
