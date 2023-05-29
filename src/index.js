import React, { createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import CountriesStore from './Store/CountriesStore';
import UserStore from './Store/UserStore.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{
      user: new UserStore(),
      countries: new CountriesStore()
    }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);

