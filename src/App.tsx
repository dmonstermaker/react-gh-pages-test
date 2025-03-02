import { BrowserRouter as Router, Route, Routes, Link } from "react-router";
import Home from "./Home";
import About from "./About";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
        </Routes>
      </div>
    </Router>
  );
}
