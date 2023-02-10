import { Navbar } from "../components/Navbar";
import { Traductor } from "../components/Traductor";
import { ImageVariatiorForm } from "../components/ImageVariatorForm";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import ErrorPage from "../ErrorPage";
import "../index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Traductor />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/image",
    element: <ImageVariatiorForm />,
  },
]);

function Root() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
}

export default Root;
