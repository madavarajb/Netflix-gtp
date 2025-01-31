import Login from "./Login/Login";
import Browser from "./Browse/Browser";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from "./Detailspage/Details";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browser />,
    },
    {
      path: "/details/:id",
      element: <Details />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
