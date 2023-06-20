import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Empresa({ usuario, setUsuario }) {

    const navigate = useNavigate();

    useEffect(() => {
        if (usuario.tipo != "Empresa") {
            navigate("/", "replace");
        }
    });
    return (
        <div className="principal">
            <h2>Welcome, {usuario.nome}</h2>
            <h3>Expert</h3>
            <nav>
                <Link to={`publicar/${usuario.id}`}>Shares Registratiton</Link>
            </nav>
            <Outlet />
        </div>
    )
}