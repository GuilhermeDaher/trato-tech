import Home from "Pages/Home";
import PaginaPadrao from "components/PaginaPadrao";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaPadrao />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}