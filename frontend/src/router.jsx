import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Index";
import { Login } from "./pages/Login/Index";

const ROUTES = Object.freeze({
  HOME: '/',
  LOGIN: '/login',
})

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Home />
  },
  {
    path: ROUTES.LOGIN,
    element: <Login />
  }
])

// eslint-disable-next-line react-refresh/only-export-components
export { router, ROUTES }