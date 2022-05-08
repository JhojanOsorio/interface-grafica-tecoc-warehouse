import { NavLink } from "react-router-dom"
import Admin from'../assets/img/Admin.jpeg'

import * as FaIcons from 'react-icons/fa'

const Sidebar = () => {
    return (
    
    <div className="sidebar">

         
        <ul>    
        
            <li>
                <h2 className="text-white text-center">TECOC</h2>
                <br></br>
                <img src={Admin} alt="Logotipo" className="  imagen" />
            </li>
            <br></br>
            <li>
                    <NavLink to="/" exact className="text-white rounded py-2 w-100 d-inline-block px-3" activeClassName="active"><FaIcons.FaProductHunt className="me-2"></FaIcons.FaProductHunt>Productos</NavLink>  
           </li>
           <li>
                    <NavLink to="/clients" exact className="text-white rounded py-2 w-100 d-inline-block px-3" activeClassName="active"><FaIcons.FaUserCircle className="me-2"></FaIcons.FaUserCircle>Clientes</NavLink>            
           </li>
           <li>
                    <NavLink to="/responsible" exact className="text-white rounded py-2 w-120 d-inline-block px-3" activeClassName="active"><FaIcons.FaUserAlt className="me-7"></FaIcons.FaUserAlt>Responsable</NavLink>          
           </li>
           <li>      
                    <NavLink to="/users" exact className="text-white rounded py-2 w-100 d-inline-block px-3" activeClassName="active"><FaIcons.FaUsers className="me-2"></FaIcons.FaUsers>Usuarios</NavLink>      
           </li>



        </ul>
        

</div>
    )
}

export default Sidebar