import React from "react";
import NumberGrid from "../../NumberGrid";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RandomNumber from "../../Rifas/RandomNumber/RandomNumber";
import WhatsappButton from "../../WhatsappButton/WhatsappButton";
import Tienda from "./../../Tienda/Tienda";
import About from "./../../About/About";
import Contact from "./../../Contact/Contact";
import Home from "../../Home/Home";

import './Content.css'
import Rifas from "../../Rifas/Rifas";
const router = createBrowserRouter([
  { path: "*", element: <Home /> },
  {
    path: "/admin/rifaspadel",
    element: <NumberGrid />,
  },
  {
    path: "/rifas",
    element: <Rifas/>,
  },
  {
    path: "/number",
    element: <RandomNumber />,
  },
  {
    path: "/tienda",
    element: <Tienda />,
  },
  {
    path: "/nosotros",
    element: <About />,
  },
  {
    path: "/contacto",
    element: <Contact />,
  },
]);

function Content() {
  return (
    <div className="page-content">
      <RouterProvider router={router} />
      <WhatsappButton />
    </div>
  );
}

export default Content;
