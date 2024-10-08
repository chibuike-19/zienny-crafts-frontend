import { About } from "../../pages/About/about";
import { Blog } from "../../pages/Blog/blog";
import { Checkout } from "../../pages/Checkout/checkout";
import { LandingPage } from "../../pages/LandingPage/landingPage";
import { Partners } from "../../pages/Partners/partners";
import { Shop } from "../../pages/Shop/shop";
import { RouteProps } from "./type";




export const routes: RouteProps[] = [
  { path: "/", element: <LandingPage /> },
  { path: "/shop", element: <Shop /> },
  { path: "/about", element: <About /> },
  { path: "/blog", element: <Blog /> },
  { path: "/partners", element: <Partners /> },
  { path: "/checkout", element: <Checkout /> },
];