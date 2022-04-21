import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import './app.css';

import Home from './pages/home/home';
import SignIn from './pages/signin/signin';
import PageNotFound from './pages/pagenotfound/pagenotfound';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
