import Europe from './Components/Europe.jsx';
import CountryObject from './Components/Country.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Belarus from './Belarus.js';
import './CSS/App.css';
import './CSS/Europe.css';
import './CSS/Country.css'


function App() {

  return (
    <div className="App">
      <Router>
          <Routes>
              <Route path="/" element={<Europe />}/>
              <Route path="/Belarus" element={<CountryObject />}></Route>
              <Route path="/Poland" element={<CountryObject />}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
