import Login from "./Login/Login";
import Browser from "./Browse/Browser";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from "./Detailspage/Details";
import Watchlist from "./Watchlist/Watchlist";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <Browser />,
    },
    {
      path: "/details/:id",
      element: <Details />,
    },
    {
      path: "/watchlist",
      element: <Watchlist />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
