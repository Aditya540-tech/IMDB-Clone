import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/Home/Home';
import Movie from './pages/movieDetail/Movie';
import Movielist from './components/movielist/Movielist';


function App() {
  return (
    <div className="App">
     <Router>
      <Header/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="movie/:id" element={<Movie/>}/>
        <Route path="movies/:type" element={<Movielist/>}/>
        <Route path="/*" element={<h1>Error</h1>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
