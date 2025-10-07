import { createBrowserRouter } from "react-router";
import Navbar from "../Components/Header/Navbar";
import Root from "../Root/Root";
import ErrorElement from "./ErrorPage/ErrorElement";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorElement></ErrorElement> ,
    children: [
      { index: true, Component: Navbar }
    ],
  },
]);