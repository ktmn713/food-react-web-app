import {HashRouter} from 'react-router-dom';
import {Routes, Route, Navigate} from 'react-router-dom';

import Home from './Food/Home';
import Profile from './Food/Profile';
import Search from './Food/Search';
import Details from './Food/Details';
import Register from './Food/Register';
import Signin from './Food/Profile/signin';
import Signup from './Food/Profile/signup';

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
          <Route path="/signin/*" element={<Signin />} />
          <Route path="/signup/*" element={<Signup />} />
          <Route path="/register/*" element={<Register />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
