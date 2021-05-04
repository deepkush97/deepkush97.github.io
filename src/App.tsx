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
        <main className="container p-3 ">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/projects" component={ProjectsPage} />
          <Route exact path="/resume" component={ResumePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contact" component={ContactPage} />
        </main>
      </div>
    </Router>
  );
};
