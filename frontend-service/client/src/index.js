import React from "react";
import { hydrateRoot } from "react-dom/client";
import { App } from "./App";

if (window.mountApp) {
  const container = window.mountApp;
  hydrateRoot(container, <App data={window.pageProps} />);
}
