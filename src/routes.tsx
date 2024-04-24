import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import SalesPage from "./modules/sales";
import ProductsPage from "./modules/products";
import PartnersPage from "./modules/partners";
import StockPage from "./modules/stock";
import CustomersPage from "./modules/customers";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" Component={SalesPage}></Route>
      <Route path="/products" Component={ProductsPage}></Route>
      <Route path="/stock" Component={StockPage}></Route>
      <Route path="/partners" Component={PartnersPage}></Route>
      <Route path="/customers" Component={CustomersPage}></Route>
    </Route>
  )
);

const Router: React.FC = () => <RouterProvider router={router} />;

export default Router;
