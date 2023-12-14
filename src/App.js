import { HashRouter } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './Food/Home';
import Profile from './Food/Profile';
import Search from './Food/Search';
import Details from './Food/Details';
import Signin from './Food/users/signin';
import Signup from './Food/users/signup';
import Account from './Food/users/account';
import NapsterSearch from './Food/Search/napster-search';
import NapsterAlbum from './Food/Search/napster-album';

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile/*" element={<Profile />} />
          <Route path="/search/*" element={<Search />} />
          <Route path="/details/*" element={<Details />} />
          <Route path="/profile/signin/*" element={<Signin />} />
          <Route path="/profile/signup/*" element={<Signup />} />
          <Route path="/profile/account/*" element={<Account />} />
          <Route path="/napster-search" element={<NapsterSearch />} />
          <Route path="/napster-album/:id" element={<NapsterAlbum />} />        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
