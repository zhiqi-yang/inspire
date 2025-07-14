import React from "react";
import { createRoot } from "react-dom/client";

import Counter from "@/component/Counter";

const rootElement = createRoot(document.getElementById("root")!);
rootElement.render(<Counter/>);