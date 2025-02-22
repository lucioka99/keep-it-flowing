import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import Tienda from "./pages/Tienda";
import Success from "./pages/Success";
import Failure from "./pages/Failure";
import Pending from "./pages/Pending";

function App() {
  return (
    <Router>
      <Navbar /> {/* Asegúrate de que Navbar esté fuera de Routes */}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/success" element={<Success />} />
        <Route path="/failure" element={<Failure />} />
        <Route path="/pending" element={<Pending />} />
      </Routes>
    </Router>
  );
}

export default App;
