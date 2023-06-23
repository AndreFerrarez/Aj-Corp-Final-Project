import { Link } from 'react-router-dom';
import './header.css';
import logo from './logo.png';



export default function Header() {
  return (
    <header className="header">
        <div className='header-logo'>
          <img src={logo} alt='logo'/>
        </div>
        <div className='header-links-container'>
          <Link to="/">Inicio</Link>
          <Link to="Shares">Fornecedores</Link>
          <Link to="Wealth">Produtos</Link>
          <Link to="Contact">Contato</Link>
        </div>
      

    </header>
  );
}