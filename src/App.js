import { BrowserRouter, Routes, Route, } from "react-router-dom";
import User from './Pages/User';
import Header from './layout/Header';
import Stopwatch from "./Pages/Stopwatch";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Stopwatch />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
