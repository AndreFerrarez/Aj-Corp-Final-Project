import React from 'react';
import Login from '../components/login/Login';




function Home() {
  return (
    <>
        <h1>Aqui sera a Home</h1>
        <p>Aqui ficara o logo principal, o que fazemos e espaco para se cadastar</p>
        <h2>Essa pagina logada do usuario precisa ser PRIVATE , somente sendo possivel apos login</h2>
        <Login />
    </>
  )
}

export default Home;



