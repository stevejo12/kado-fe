import { createBrowserRouter } from "react-router-dom";
import Wishlist from "./Wishlist/Wishlist";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Wishlist />
  }
]);

export default Router;