import { NavBar } from "./components/NavBar";
import { SideBar } from "./components/SideBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
export const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="d-flex">
        <SideBar />
        <main>
          <Route path="/" component={HomePage} />
        </main>
      </div>
    </Router>
  );
};
