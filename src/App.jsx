import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Country from "./pages/Country";
import Applayout from "./components/Layout/Applayout";
import ErrorPage from "./pages/ErrorPage";
import CountryDetails from "./components/Layout/CountryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "country/:id",
        element: <CountryDetails />,
      },
      {
        path: "country",
        element: <Country />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
