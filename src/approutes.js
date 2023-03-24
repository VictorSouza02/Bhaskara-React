import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import Layout from "./layout";
import Bhaskara from "./pages/bhaskara";
import Calculadora from "./pages/calculadora";
import Landing from "./pages/landing";
import Sobre from "./pages/sobre";

const AppRoutes = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Landing />} />
                    <Route path="/calculadora" element={<Calculadora />} />
                    <Route path="/bhaskara" element={<Bhaskara />} />
                    <Route path="/sobre" element={<Sobre />} />
                </Route>
            </Routes>
        </HashRouter>
    )
}

export default AppRoutes;