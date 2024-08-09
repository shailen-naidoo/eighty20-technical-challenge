import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Index";
import { Login } from "./pages/Login/Index";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login/',
    element: <Login />
  }
])

export { router }