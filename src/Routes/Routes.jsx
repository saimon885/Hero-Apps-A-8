import { createBrowserRouter } from "react-router";
import Navbar from "../Components/Header/Navbar";
import Root from "../Root/Root";
import ErrorElement from "./ErrorPage/ErrorElement";
import { Suspense } from "react";
import Home from "../Components/HomeData/Home";
import Allapps from "../Pages/Allapps/Allapps";
const homeData = fetch("main.json").then((res) => res.json());
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        index: true,
        path: "/",
        element: <Suspense fallback="Loading....">
          <Home homeData={homeData}></Home>
        </Suspense>,
      },
      {
        path:"apps",
         element: <Suspense fallback="Loading....">
          <Allapps homeData={homeData}></Allapps>
        </Suspense>
      }
    ],
  },
]);
