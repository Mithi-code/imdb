import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";

function App() {
  return <div className="App">
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/movie/:id" element={<h1>Movie Detail page</h1>}></Route>
      <Route path="/movies/:types" element={<h1>Movies list page</h1>}></Route>
      <Route path="/*" element={<h1>Error PAge</h1>}></Route>
    </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
