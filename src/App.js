import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import PagesRouters from "./routers/PagesRouters";

function App() {
  return (
    <BrowserRouter>
      <PagesRouters />
    </BrowserRouter>
  );
}

export default App;
