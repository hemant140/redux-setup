import { BrowserRouter, Routes, Route, } from "react-router-dom";
import User from './Pages/User';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
