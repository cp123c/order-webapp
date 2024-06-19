import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "@pages/Home/HomePage";
import ProductDetailPage from "@pages/ProductDetail/ProductDetailPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products/:productId",
    element: <ProductDetailPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
