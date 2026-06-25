import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../features/public-plataform/pages/Home";
import Situacao from "../features/public-plataform/pages/Situacao";
import Result from "../features/public-plataform/pages/Result";
import Detalhes from "../features/public-plataform/pages/Detalhes";
import AjudaUrgente from "../features/public-plataform/pages/AjudaUrgente";

export function Routers(){
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/situacao" element={<Situacao />} />
                <Route path="/detalhes" element={<Detalhes />} />
                <Route path="/result" element={<Result />} />
                <Route path="/ajudaUrgente" element={<AjudaUrgente />} />
            </Routes>
        </BrowserRouter>    
        </>
    )   
}

export default Routers;