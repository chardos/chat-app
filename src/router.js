import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Lobby from "./components/Lobby";
import Room from "./components/Room";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Lobby />,
  },
  {
    path: "/:roomId",
    element: <Room />,
  },
]);
