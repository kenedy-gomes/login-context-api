import "./App.css";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Private from "./pages/Private";
import { RequireAuth } from "./contexts/Auth/RequireAuth";
import { useContext } from "react";
import { AuthContext } from "./contexts/Auth/AuthContext";

function App() {
  const Navigate = useNavigate();
  const auth = useContext(AuthContext);

  const handleLogout = async () => {
    await auth.signout();
    Navigate("/");
  };

  return (
    <div className="App">
      <header>
        <h1>Sistema de login</h1>
        <nav>
          <Link to="/">
            <Home />
          </Link>
          <Link to="/private">
            <Private />
          </Link>
          {auth.user && <button onClick={handleLogout}>sair</button>}
        </nav>
      </header>
      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/private"
          element={
            <RequireAuth>
              <Private />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
