import { Link, NavLink } from "react-router-dom";

import { useAuthentication } from "../hooks/useAuthentication";

import { useAuthValue } from "../contexts/AuthContext";


import styles from "./Navbar.module.css";
import { FaSignOutAlt } from 'react-icons/fa';
import casa from '../components/assets/casa.png';

const Navbar = () => {
  const { logout } = useAuthentication();
  const { user } = useAuthValue();

  return (
    <nav className={styles.navbar}>
      <NavLink className={styles.brand} to="/">
        Pet <span>Adote</span> 
        <img id="imagem" src={casa}></img>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/adote"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Adote
          </NavLink>
        </li>

        {!user && (
          <>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Entrar
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Cadastrar
              </NavLink>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
              <NavLink
                to="/posts/create"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Postar animal
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Histórico
              </NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Sobre
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ajude"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Ajude
          </NavLink>
        </li>
        {user && (
          <li>
              <button Text="" onClick={logout}>
               <FaSignOutAlt size={30}/>
              </button>
          </li>
          
        )}
      </ul>
    </nav>
    
  );
};

export default Navbar;
