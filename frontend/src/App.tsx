import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Context } from ".";
import MainLayout from "./common/components/MainLayout";
import Register from "./pages/register/Register";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./pages/login/Login";
import MainPage from "./pages/main/MainPage";
import AddPost from "./pages/main/addpost/AddPost";

function App() {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  return (
    <BrowserRouter>
      <Routes>
        {user ? (
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/new" element={<AddPost />} />
          </Route>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Login />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
