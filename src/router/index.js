import { createBrowserRouter } from "react-router-dom";
import Latihan from "../components/Latihan";
import PageLayout from "../components/PageLayout";

export const router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: [
      {
        path: "/",
        element: <Latihan />,
      },
    ],
  },
]);
