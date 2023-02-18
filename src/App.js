import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Shop from "./components/Shop/Shop";
import Orders from "./components/Orders/Orders";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Main from "./layouts/Main";
import { productsAndCartLoader } from "./loaders/productsAndCartLoader";
import Shipping from "./components/Shipping/Shipping";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          // loader: async () => fetch("products.json"),
          loader: productsAndCartLoader,
          element: <Shop></Shop>,
        },
        {
          path: "/orders",
          loader: productsAndCartLoader,
          element: <Orders></Orders>,
        },
        { path: "/inventory", element: <Inventory></Inventory> },
        {
          path: "/shipping",
          element: (
            <PrivateRoute>
              <Shipping></Shipping>
            </PrivateRoute>
          ),
        },
        { path: "/about", element: <About></About> },
        { path: "/login", element: <Login></Login> },
        { path: "/signup", element: <SignUp></SignUp> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
