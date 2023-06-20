import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Layout from "../src/components/ui/Layout";
import Home from "../src/components/ui/Home";
import NovaConta from "../src/components/ui/NovaConta";
import Empresa from "../src/components/ui/Empresa";
import Candidato from "../src/components/ui/Candidato";
import Shares from "../src/routes/Shares"
import Wealth from "../src/routes/Wealth"
import Contact from "../src/routes/Contact"
import "./App.css";
import PublicarVaga from "../src/components/ui/PublicarVaga";

export default function App() {

    const [usuario, setUsuario] = useState(
      { id: "", nome: "", email: "", fone: "", senha: "", tipo: "" }
    );
    const [erro, setErro] = useState("");
    const navigate = useNavigate();
  
    useEffect(() => {
      if (usuario.id.length > 0 && usuario.nome.length > 0) {
        if (usuario.tipo === "Empresa") {
          navigate("/empresa");
        } else if (usuario.tipo === "Candidato") {
          navigate("/wealth");
        }
      }
      if (erro.length > 0) {
        alert(erro);
        setErro("");
      }
    }, [usuario, erro]);
  
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home usuario={usuario} setUsuario={setUsuario} setErro={setErro} />} />
          <Route path="criarConta" element={<NovaConta usuario={usuario} setUsuario={setUsuario} />} />
          <Route path="shares" element={<Shares/>}/>
          <Route path="wealth" element={<Wealth/>}/>
          <Route path="Contact" element={<Contact/>}/>
          <Route path="empresa" element={<Empresa usuario={usuario} setUsuario={setUsuario} />}>
            <Route path="publicar" element={<PublicarVaga />} >
              <Route path=":idUsuario" element={<PublicarVaga />} />
            </Route>
          </Route>
          <Route path="candidato" element={<Candidato usuario={usuario} setUsuario={setUsuario} />} />
        </Route>
      </Routes>
    )
  }