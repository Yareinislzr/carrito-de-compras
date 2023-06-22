import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { Facturacion } from "./componenetes/Facturacion";
import { ComprasCarrito } from "./contex/compras";
import { Nav } from "./componenetes/Nav";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Nav />,
      },
    ],
  },
  {
    path: "/facturacion",
    element: <Facturacion />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ComprasCarrito>
    <RouterProvider router={router} />
  </ComprasCarrito>
);
