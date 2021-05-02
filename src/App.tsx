import { NavBar } from "./components/NavBar";
import { SideBar } from "./components/SideBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ResumePage } from "./pages/ResumePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
export const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="d-flex">
        <SideBar />
        <main className="container p-3">
          <Route path="/" component={HomePage} />
          <Route path="/projects" component={ProjectsPage} />
          <Route path="/resume" component={ResumePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
        </main>
      </div>
    </Router>
  );
};
