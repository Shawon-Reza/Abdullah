import {
  createBrowserRouter,
} from "react-router-dom";
import LandingPage from "../Components/LandingPage/LandingPage";
import FAQ from "../Components/LandingPage/FAQ";
import Pricing from "../Components/LandingPage/Pricing";
import AboutUs from "../Components/LandingPage/AboutUs";
import Register from "../Components/LandingPage/Register";
import ErrorPage from "../Components/LandingPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage></LandingPage>,
  },
  {
    path: "/faq",
    element: <FAQ></FAQ>,
  },
  {
    path: "/pricing",
    element: <Pricing></Pricing>,
  },
  {
    path: "/about_us",
    element: <AboutUs></AboutUs>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);


export default router