import React, { useEffect } from "react";
import {Link, Outlet, useNavigate } from "react-router-dom";

export default function Candidato({ usuario, setUsuario }) {
    
    const navigate = useNavigate();

    useEffect(() => {
        if (usuario.tipo != "Candidato") {            
            navigate("/", "replace");
        }
    });

    return (
        <div className="principal">
            <h2>Bem Vindo, {usuario.nome}</h2>
            <h3>Candidato</h3>
            <nav>
                <Link to={`publicar/${usuario.id}`}>Analysis</Link>
            </nav>
            <Outlet />
        </div>
    )
}