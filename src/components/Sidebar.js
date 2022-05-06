import { Link } from "react-router-dom"

const Sidebar = () => {
    return (
    
    <div className="sidebar">
        <ul>    
            <li>
                    <Link to="/">Productos</Link>  
           </li>
           <li>
                    <Link to="/clients">Clientes del tecoc</Link>            
           </li>
           <li>
                    <Link to="/responsible">Responsables</Link>          
           </li>
           <li>      
                    <Link to="/users">Usuarios</Link>      
           </li>



        </ul>
        

</div>
    )
}

export default Sidebar