import { Link } from 'react-router-dom';
import Empresa from '../../../../aj-capital-react/src/empresas/Empresa';
import './header.css';
import logo from './logo.png';



export default function Header() {
  return (
    <header className="header">
        <div className='header-logo'>
          <img src={logo} alt='logo'/>
        </div>
        <div className='header-links-container'>
          <Link to="/">Home</Link>
          <Link to="Shares">Shares</Link>
          <Link to="Wealth">Wealth Management</Link>
          <Link to="Contact">Contact</Link>
        </div>
      

    </header>
  );
}