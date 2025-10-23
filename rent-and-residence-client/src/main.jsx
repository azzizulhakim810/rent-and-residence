import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "leaflet/dist/leaflet.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "sonner";

import "./index.css";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import AuthProvider from "./providers/AuthProvider";
import { ComparisonPopupProvider } from "./providers/ComparisonPopupContext";
import { SignInAndUpProvider } from "./providers/SignInAndUpProvider";

export const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <SignInAndUpProvider>
        <ComparisonPopupProvider>
          <QueryClientProvider client={queryClient}>
            <Toaster richColors position="top-center" />
            <RouterProvider router={router} />
          </QueryClientProvider>
        </ComparisonPopupProvider>
      </SignInAndUpProvider>
    </AuthProvider>
  </StrictMode>
);
