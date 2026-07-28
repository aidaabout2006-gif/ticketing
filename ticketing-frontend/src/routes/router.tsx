//مدیریت صفحات
import { Routes, Route } from "react-router-dom";

import AppLayout from "../components/layout/AppLayout";

import Dashboard from "../pages/Dashboard/Dashboard";
import Tickets from "../pages/Tickets/Tickets";
import Categories from "../pages/Categories/Categories";
import Priorities from "../pages/Priorities/Priorities";
import Statuses from "../pages/Statuses/Statuses";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>

        <Route index element={<Dashboard />} />

        <Route
          path="tickets"
          element={<Tickets />}
        />

        <Route
          path="categories"
          element={<Categories />}
        />

        <Route
          path="priorities"
          element={<Priorities />}
        />

        <Route
          path="statuses"
          element={<Statuses />}
        />

      </Route>
    </Routes>
  );
}