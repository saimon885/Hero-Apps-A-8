import { createBrowserRouter } from "react-router";
import Navbar from "../Components/Header/Navbar";
import Root from "../Root/Root";
import ErrorElement from "./ErrorPage/ErrorElement";
import { Suspense } from "react";
import Home from "../Components/HomeData/Home";
import Allapps from "../Pages/Allapps/Allapps";
import Spinner from "./Loading/Spinner";
import Details from "../Pages/Allapps/Ditails/Details";
import ErrorAnotherPage from "./ErrorPage/ErrorAnotherOPT/ErrorAnotherPage";
import Installation from "../Pages/Allapps/Installation/Installation";
const homeData = fetch("/main.json").then((res) => res.json());
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        index: true,
        path: "/",
        element: (
          <Suspense fallback={<Spinner></Spinner>}>
            <Home homeData={homeData}></Home>
          </Suspense>
        ),
      },{
        path:"/installation",
        loader: ()=> fetch("/main.json"),
        Component: Installation
      },
      {
        path: "/apps",
        element: (
          <Suspense fallback={<Spinner></Spinner>}>
            <Allapps homeData={homeData}></Allapps>
          </Suspense>
        ),
      },
      {
        path:"/details/:id",
        errorElement: <ErrorAnotherPage></ErrorAnotherPage> ,
        loader: ()=> fetch("/main.json"),
        Component:Details
      },
    ],
  },
]);
