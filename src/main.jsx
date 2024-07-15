import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import {
  // createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Toaster } from 'react-hot-toast'

import { HelmetProvider } from 'react-helmet-async'
import './index.css'
// import Sidebar from './Shared/Sidebar/Sidebar';
import { router } from './routes/Router';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster />
    </QueryClientProvider>
  </HelmetProvider>
);
