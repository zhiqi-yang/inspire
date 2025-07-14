import { createRoot } from "@/core/MyReact"

import MyCounter from "@/component/MyCounter";

const rootElement = createRoot(document.getElementById("root")!);
rootElement.render(MyCounter);