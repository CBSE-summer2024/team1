import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import UserProfilePage from "./Pages/UserProfilePage";
import React from "react";
import Layout from "./Layout";
import DetailsPage from "./Pages/DetailsPage";
import ProductsPage from "./Pages/ProductsPage";
import AuthPage from "./Pages/AuthPage";
import OrdersHistory from "./Pages/OrdersHistory";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="/profile" element={<UserProfilePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<DetailsPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/order-history" element={<OrdersHistory/>} />
    </Route>
  )
);

export default function Router() {
  return <RouterProvider router={router} />;
}
