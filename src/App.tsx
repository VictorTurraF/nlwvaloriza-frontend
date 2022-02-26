import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Spinner from "./components/Spinner";
import RequireAuth from "./components/RequireAuth";
import { AuthProvider } from "./contexts/AuthContext";
import AddNewCompliment from "./pages/AddNewCompliment";

const ProfilePage = React.lazy(() => import("./pages/ProfilePage"));
const ComplimentsPage = React.lazy(() => import("./pages/ComplimentsPage"));
const TagsPage = React.lazy(() => import("./pages/TagsPage"));
const UsersPage = React.lazy(() => import("./pages/UsersPage"));
const AddNewTagPage = React.lazy(() => import("./pages/AddNewTagPage"));

const DashboardLayout = React.lazy(() => import("./layouts/DashboardLayout"));
const LoginPage = React.lazy(() => import("./pages/LoginPage"));

function App() {
  return (
    <AuthProvider>
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
              <Route index element={<UsersPage />} />
              <Route path="users" element={<UsersPage />} />
              <Route path="me" element={<ProfilePage />} />
              <Route path="compliments">
                <Route path="new" element={<AddNewCompliment />} />
                <Route index element={<ComplimentsPage />} />
              </Route>
              <Route path="tags">
                <Route path="new" element={<AddNewTagPage />} />
                <Route index element={<TagsPage />} />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
