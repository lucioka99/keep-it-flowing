import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import Tienda from "./pages/Tienda";

function App() {
  return (
    <Router>
      <Navbar /> {/* Asegurate de que Navbar esté fuera de Routes */}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/tienda" element={<Tienda />} />
      </Routes>
    </Router>
  );
}

export default App;


