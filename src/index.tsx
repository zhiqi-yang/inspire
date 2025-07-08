import React from "react";
import { createRoot } from "react-dom/client";

import NewDiv from "@/component/helloworld";

const rootElement = createRoot(document.getElementById("root")!);
rootElement.render(<NewDiv/>);