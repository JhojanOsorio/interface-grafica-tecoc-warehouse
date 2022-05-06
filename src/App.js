
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css'

import Products from './pages/products';
import Clients from './pages/clients';
import Responsible from './pages/responsible';
import Users from './pages/users';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import TableProduct from './components/TableProduct';

function App() {
  return (
    
    
    <Router>
   
     <Navbar />
     <div className="flex">   
       <Sidebar/>
       <div className="content">
      <Route exact path ="/" component={Products} />
      <Route exact path ="/clients" component={Clients}/>
      <Route path ="/responsible" element={<Responsible></Responsible>}/>
      <Route path ="/users" element={<Users></Users>} />
       </div>
       
     </div>
     
    
    </Router>
   
    
   
    
  );
}

export default App;
