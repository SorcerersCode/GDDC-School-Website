import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './HomePage'
import AboutUs from './AboutUs'
import Academics from './Academics'
import Athletics from './Athletics'
import CalandarandEvents from './CalandarandEvents'
import ContactUs from './ContactUs'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="" element={<HomePage/>}></Route>
          <Route path="/AboutUs" element={<AboutUs/>}></Route>
          <Route path="/Academics" element={<Academics/>}></Route>
          <Route path="/Athletics" element={<Athletics/>}></Route>
          <Route path="/Calendar&Events" element={<CalandarandEvents/>}></Route>
          <Route path="/ContactUs" element={<ContactUs/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;