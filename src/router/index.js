import React from "react"
import { Navigate } from "react-router-dom"


const Home = React.lazy(() => import("@/views/home"))
const Further = React.lazy(() => import("@/views/further"))
const Detail = React.lazy(() => import("@/views/detail"))
const Demo = React.lazy(() => import("@/views/demo"))

const routes = [
  {
    path: "/",
    element: <Navigate to="/home"/>
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/further",
    element: <Further />
  },
  {
    path: "/detail",
    element: <Detail />
  },
  {
    path: "/demo",
    element: <Demo />
  },
]

export default routes