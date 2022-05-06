
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';


import Products from './pages/products';
import Clients from './pages/clients';
import Responsible from './pages/responsible';
import Users from './pages/users';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    
    <Router>
   
     <Navbar />
     <div className="flex">   
       <Sidebar/>
       <div className="content">
      <Route path ="/" element={<Products></Products>} />
      <Route path ="/clients" element={<Clients></Clients>}/>
      <Route path ="/responsible" element={<Responsible></Responsible>}/>
      <Route path ="/users" element={<Users></Users>} />
       </div>
      
     </div>
     
    
    </Router>
    
    </BrowserRouter>
    
  );
}

export default App;
