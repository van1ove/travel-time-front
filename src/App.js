import Europe from './Components/Europe.jsx';
import Country from './Components/Country.jsx';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppRouter from './Components/AppRouter.jsx';
import NavigationBar from './Components/NavigationBar.jsx';


function App() {

  return (
      <Router>
          {/* <Routes>
              <Route path="/" element={<Europe />}/>
              <Route path="/Belarus" element={<Country />}></Route>
              <Route path="/Poland" element={<Country />}></Route>
          </Routes> */}
          <AppRouter />
      </Router>
  );
}

export default App;
