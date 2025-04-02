import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import UserHomeSection from "./pages/UserHomeSection";
import AdminHomeSection from "./pages/AdminHomeSection";
import Owner from "./pages/Owner"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <div>
        <h1>404 - Not Found</h1>
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/owner",
        element: <Owner />,
      },
      {
        path: "user-home",
        element: <UserHomeSection />,
      },
      {
        path: "admin-home",
        element: <AdminHomeSection />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
