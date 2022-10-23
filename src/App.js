import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';

import { Company } from "./components/pages/Company";
import { Contact } from "./components/pages/Contact";
import { Home } from "./components/pages/Home";
import {Service} from './components/pages/Service'
import {Blog} from './components/pages/Blog'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { WebFooter } from "./components/footer/WebFooter";

function App() {
  return (
    <div>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="blog" element={<Blog/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="service" element={<Service/>} />
          <Route path="company" element={<Company/>} />
        </Route>
      </Routes>
      {/* <WebFooter /> */}
    </BrowserRouter>
   
    </div>
  );
}

export default App;
