import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Menu from "./nav/Menu";
import BlogPage from "./Page/BlogPage";
import HomePage from "./Page/HomePage";
import { AuthProvider } from "./Provider/auth";

const App = () => {
    return (
        <React.Fragment>
            <HashRouter>
                <AuthProvider>
                    <Menu />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/a" element={<BlogPage />} />
                    </Routes>
                </AuthProvider>
            </HashRouter>
        </React.Fragment>
    );
};

export default App;
