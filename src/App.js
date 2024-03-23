import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './HomePage'
import AboutUs from './AboutUs'
import Admissions from './Admissions'
import FacultyandStaff from './FacultyandStaff'
import Athletics from './Athletics'
import CalandarandEvents from './CalandarandEvents'
import NewsandAnnouncements from './NewsandAnnouncements'
import ContactUs from './ContactUs'
import Alumni from './Alumni'
import Resources from './Resources'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="" element={<HomePage/>}></Route>
          <Route path="/AboutUs" element={<AboutUs/>}></Route>
          <Route path="/Admissions" element={<Admissions/>}></Route>
          <Route path="/Faculty&Staff" element={<FacultyandStaff/>}></Route>
          <Route path="/Athletics" element={<Athletics/>}></Route>
          <Route path="/Calendar&Events" element={<CalandarandEvents/>}></Route>
          <Route path="/News&Announcements" element={<NewsandAnnouncements/>}></Route>
          <Route path="/ContactUs" element={<ContactUs/>}></Route>
          <Route path="/Alumni" element={<Alumni/>}></Route>
          <Route path="/Resources" element={<Resources/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;