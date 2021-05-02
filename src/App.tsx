import { NavBar } from "./components/NavBar";
import { SideBar } from "./components/SideBar";
export const App = () => {
  return (
    <>
      <NavBar />
      <div className="d-flex">
        <SideBar />
        <main></main>
      </div>
    </>
  );
};
