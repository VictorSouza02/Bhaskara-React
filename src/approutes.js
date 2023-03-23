import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import Layout from "./layout";
import Calculadora from "./pages/calculadora";
import Landing from "./pages/landing";

const AppRoutes = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Landing />} />
                    <Route path="/calculadora" element={<Calculadora />} />
                </Route>
            </Routes>
        </HashRouter>
    )
}

export default AppRoutes;