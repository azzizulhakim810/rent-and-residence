import "leaflet/dist/leaflet.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import AuthProvider from "./providers/AuthProvider";
import { PopupProvider } from "./providers/PopupProvider";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

export const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <PopupProvider>
        {/* <ScrollToTop /> */}
        <QueryClientProvider client={queryClient}>
          <Toaster richColors position="top-center" />
          <RouterProvider router={router} />
        </QueryClientProvider>
      </PopupProvider>
    </AuthProvider>
  </StrictMode>
);
