
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css'


import Products from './pages/products';
import Clients from './pages/clients';
import Responsible from './pages/responsible';
import Users from './pages/users';
import './App.scss';


function App() {
  return (
    
    
    <Router>
   
     
     <div className="flex">   
          
       <Sidebar/>
       <div className="content w-100">
         
      <Navbar />
      <Route path ="/" element={<Products></Products>} />
      <Route path ="/clients" element={<Clients></Clients>}/>
       <div className="content">
      <Route exact path ="/" component={Products} />
      <Route exact path ="/clients" component={Clients}/>
      <Route path ="/responsible" element={<Responsible></Responsible>}/>
      <Route path ="/users" element={<Users></Users>} />
       </div>
       
     </div>
     </div>
     
    
    </Router>
   
    
   
    
  );
}

export default App