import {
  createBrowserRouter,
} from "react-router-dom";
import LandingPage from "../Components/LandingPage/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage></LandingPage>,
  },
]);


export default router