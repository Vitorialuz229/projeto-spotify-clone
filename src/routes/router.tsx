import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import Artists  from "../pages/Artists";
import Artist from "../pages/Artist";
import Songs from "../pages/Songs";
import Song from "../pages/Song";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, 
  },
  {
    path: "/*",
    element:<NotFound />, 
  },
  {
    path: "/artists",
    element: <Artists />, 
  },
  {
    path: "/artist/:id",
    element: <Artist />, 
  },
  {
    path: "/songs",
    element: <Songs />, 
  },
  {
    path: "/song/:id",
    element: <Song />, 
  },
]);