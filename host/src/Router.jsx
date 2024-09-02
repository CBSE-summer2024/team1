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
import {ROUTES} from "Shared"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path={ROUTES.PROFILE} element={<UserProfilePage />} />
      <Route path={ROUTES.PRODUCTS} element={<ProductsPage />} />
      <Route path={ROUTES.PRODUCT_DETAILS} element={<DetailsPage />} />
      <Route path={ROUTES.AUTH} element={<AuthPage />} />
      <Route path={ROUTES.ORDER_HISTORY} element={<OrdersHistory />} />
    </Route>
  )
);

export default function Router() {
  return <RouterProvider router={router} />;
}
