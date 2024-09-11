import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import ErrorPage from "./components/ErrorPage";
import UserProfile from "./pages/UserProfile";


const routes= [
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: "/about",
        element:<About />,
        errorElement: <ErrorPage />
    },
    {
        paht: "/login",
        element: <Login />,
        errorElement: <ErrorPage />
    },
    {
        path: "/profile/:id",
        element: <UserProfile />,
        errorElement: <ErrorPage />
    }
];

export default routes;