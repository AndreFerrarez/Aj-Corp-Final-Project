// import { Outlet } from "react-router-dom";
// import React, { useState, useEffect } from "react";
// import { Route, Routes, useNavigate } from "react-router-dom";
// import Layout from "./components/ui/Layout";
// // import Home from './routes/Home.jsx'
// // import Shares from './routes/Shares.jsx'
// // import ErrorPage from './routes/ErrorPage.jsx'
// // import Contact from './routes/Contact.jsx'
// // import Wealth from './routes/Wealth.jsx'
// // import Register from './components/users/Register.jsx'

// import React, { useState, useEffect } from "react";
// import { Route, Routes, useNavigate } from "react-router-dom";
// import Layout from "../src/components/ui/Layout";
// import Home from "../src/components/ui/Home";
// import NovaConta from "../src/components/ui/NovaConta";
// import Empresa from "../src/components/ui/Empresa";
// import Candidato from "../src/components/ui/Candidato";
// import "../src/styles/App.css";
// import PublicarVaga from "../src/components/ui/PublicarVaga";


// function App() {
    
//   const [usuario, setUsuario] = useState(
//     { id: "", nome: "", email: "", fone: "", senha: "", tipo: "" }
//   );
//   const [erro, setErro] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (usuario.id.length > 0 && usuario.nome.length > 0) {
//       if (usuario.tipo === "Empresa") {
//         navigate("/empresa");
//       } else if (usuario.tipo === "Candidato") {
//         navigate("/candidato");
//       }
//     }
//     if (erro.length > 0) {
//       alert(erro);
//       setErro("");
//     }
//   }, [usuario, erro]);

//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home usuario={usuario} setUsuario={setUsuario} setErro={setErro} />} />
//         <Route path="criarConta" element={<NovaConta usuario={usuario} setUsuario={setUsuario} />} />
//         <Route path="empresa" element={<Empresa usuario={usuario} setUsuario={setUsuario} />}>
//           <Route path="publicar" element={<PublicarVaga />} >
//             <Route path=":idUsuario" element={<PublicarVaga />} />
//           </Route>
//         </Route>
//         <Route path="candidato" element={<Candidato usuario={usuario} setUsuario={setUsuario} />} />
//       </Route>
//     </Routes>
//   )


//   const [usuario, setUsuario] = useState(
//     { id: "", nome: "", email: "", fone: "", senha: "", tipo: "" }
//   );
//   const [erro, setErro] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (usuario.id.length > 0 && usuario.nome.length > 0) {
//       if (usuario.tipo === "Empresa") {
//         navigate("/empresa");
//       } else if (usuario.tipo === "Candidato") {
//         navigate("/candidato");
//       }
//     }
//     if (erro.length > 0) {
//       alert(erro);
//       setErro("");
//     }
//   }, [usuario, erro]);



//   return (

//   )
//     <div>
//        <Header />
//       {/* // this is the router component and will be resctict to the router generated in the main.jsx */}
//       <Outlet />



//     </div>


//     <Routes>
//       {/* <Header /> */}
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home usuario={usuario} setUsuario={setUsuario} setErro={setErro} />} />
//         <Route path="Register" element={<Register usuario={usuario} setUsuario={setUsuario} />} />
//         <Route path="wealth" element={<Wealth usuario={usuario} setUsuario={setUsuario} />}>
//           <Route path="Shares" element={<Shares />} >
//             <Route path=":idUsuario" element={<Shares />} />
//           </Route>
//         </Route>
//         {/* <Route path="candidato" element={<Candidato usuario={usuario} setUsuario={setUsuario} />} /> */}
//       </Route>
//     </Routes>
//   )
// }

// export default App;