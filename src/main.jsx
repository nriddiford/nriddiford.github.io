import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Theme } from "@radix-ui/themes";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Theme
      appearance="dark"
      accentColor="blue"
      grayColor="slate"
      radius="large"
      scaling="100%"
    >
      <App />
    </Theme>
  </StrictMode>
);
