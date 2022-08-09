import React, { createContext } from "react";
import ReactDOM from "react-dom/client";

import { initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";

import App from "./App";

import "./scss/index.scss";

const firebaseConfig = {
  apiKey: "AIzaSyCER5AvcR39TwFDkFmaxeT-5hE1Q_Coql4",
  authDomain: "blog-back-6dbcd.firebaseapp.com",
  projectId: "blog-back-6dbcd",
  storageBucket: "blog-back-6dbcd.appspot.com",
  messagingSenderId: "936533132421",
  appId: "1:936533132421:web:d393097bde16eafff315ec",
  measurementId: "G-S39C6L4QY3",
};

interface AppContextInterface {
  auth: Auth;
}


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const Context = createContext<AppContextInterface>({
  auth
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Context.Provider
    value={{
      auth,
    }}
  >
    <App />
  </Context.Provider>
);
