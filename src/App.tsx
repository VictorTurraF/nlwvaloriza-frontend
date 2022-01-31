import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Spinner from "./components/Spinner";
import RequireAuth from './components/RequireAuth';

const DashboardLayout = React.lazy(() => import("./layouts/DashboardLayout"));
const LoginPage = React.lazy(() => import("./pages/Login"));
const ComplimentsPage = React.lazy(() => import("./pages/Compliments"));
const TagsPage = React.lazy(() => import("./pages/Tags"));
const UsersPage = React.lazy(() => import("./pages/Users"));
const AddNewTagPage = React.lazy(() => import("./pages/AddNewTagPage"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route
            path="panel"
            element={
              <RequireAuth>
                <DashboardLayout />
              </RequireAuth>
            }
          >
            <Route path="users" element={<UsersPage />} />
            <Route path="compliments" element={<ComplimentsPage />} />
            <Route path="tags">
              <Route path="new" element={<AddNewTagPage />} />
              <Route index element={<TagsPage />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
