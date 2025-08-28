import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Blogs from "./Pages/Blogs";
import Services from "./Pages/Services";
import SingleBlog from "./components/SingleBlog";
function App() {

const router= createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,          // ✅ this makes Home the default route
          element: <Home />,
        },
        {
          path: "about",        // ✅ relative path (no "/")
          element: <About />,
        },
        {
          path: "contact",      // ✅ relative path (no "/")
          element: <Contact />,
        },
        {
          path: "blogs",      // ✅ relative path (no "/")
          element: <Blogs />,
        },
        {
          path: "service",      // ✅ relative path (no "/")
          element: <Services />,
        },
        {
          path: "blogs/:id",      // ✅ relative path (no "/")
          element: <SingleBlog />,
          loader:({params})=>fetch(`http://localhost:5000/blogs/${params.id}`)
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />
}


export default App
