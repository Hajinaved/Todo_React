import React, { useState } from "react";
import "./todoapp.css";
import LogoutComp from "./LogoutComponent";
import HeaderComp from "./HeaderComponent";
import FooterComp from "./FooterComponent";
import ErrorComp from "./ErrorComponent";
import LoginComponent from "./LoginComponent";
import ListTodo from "./ListtodoComponent";
import WelcomeComp from "./WelcomeComponent";
import AuthProvider from "./security/AuthContext";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useParams,
  Link,
} from "react-router-dom";

export default function Todoapp() {
  return (
    <div className="TodoAppComp">
      <AuthProvider>
        <BrowserRouter>
          <HeaderComp />
          <Routes>
            <Route path="/" element={<LoginComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/welcome/:username" element={<WelcomeComp />} />
            <Route path="/listtodo/:username" element={<ListTodo />} />
            <Route path="*" element={<ErrorComp />} />
            <Route path="/logout" element={<LogoutComp />} />
          </Routes>
          <FooterComp />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
