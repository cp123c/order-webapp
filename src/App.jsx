import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "@pages/Home";
import Product from "@pages/Product"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Product />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
