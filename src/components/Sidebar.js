import { NavLink, useLocation } from "react-router-dom";
import Admin from "../assets/img/Admin.jpeg";
import * as FaIcons from "react-icons/fa";

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <ul>
          <li>
            <h2 className="text-white text-center">TECOC</h2>
            <br></br>
            <img src={Admin} alt="Logotipo" className="  imagen" />
          </li>
          <br></br>
          <li>
            <NavLink
              to="/products"
              className="text-white rounded py-2 w-100 d-inline-block px-3"
            >
              <FaIcons.FaProductHunt className="me-2"></FaIcons.FaProductHunt>{" "}
              Productos{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/clients"
              className="text-white rounded py-2 w-100 d-inline-block px-3"
            >
              <FaIcons.FaProductHunt className="me-2"></FaIcons.FaProductHunt>
              Clientes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/responsible"
              className="text-white rounded py-2 w-100 d-inline-block px-3"
            >
              <FaIcons.FaProductHunt className="me-2"></FaIcons.FaProductHunt>
              Responsable
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users"
              className="text-white rounded py-2 w-100 d-inline-block px-3"
            >
              <FaIcons.FaProductHunt className="me-2"></FaIcons.FaProductHunt>
              Usuarios
            </NavLink>
          </li>
        </ul>

        
      </div>
      
    </div>
  );
};

export default Sidebar;
