import {HashRouter} from 'react-router-dom';
import {Routes, Route, Navigate} from 'react-router-dom';

import Home from './Food/Home';
import Profile from './Food/Profile';
import Search from './Food/Search';
import Details from './Food/Details';
import Login from './Food/Login';
import Register from './Food/Register';

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to ="/Home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile/*" element={<Profile />} />
          <Route path="/search/*" element={<Search />} />
          <Route path="/details/*" element={<Details />} />
          <Route path="/login/*" element={<Login />} />
          <Route path="/register/*" element={<Register />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
