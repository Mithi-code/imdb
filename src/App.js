import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import MovieList from './components/MovieList/MovieList';
import Movie from './Pages/MovieDetails/Movie';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header />
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="movie/:id" element={<Movie />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;