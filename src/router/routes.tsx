import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/dashboard/dashboard";
import App from "../App";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
    ],
  },
]);
