import React, { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
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

  useEffect(() => {
    auth.onAuthStateChanged((authenticated) => {
      if (authenticated) {
        authenticated
          .getIdToken()
          .then((idToken) => {
            localStorage.setItem("idToken", idToken);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });

    auth.onIdTokenChanged((user) => {
      if (user) {
        user
          .getIdToken()
          .then((idToken) => {
            console.log(idToken);
            localStorage.setItem("idToken", idToken);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  }, []);

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
