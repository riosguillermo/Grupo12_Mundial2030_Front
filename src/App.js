import "./App.css";
import SideNavbar from "./components/sideNavBar";
import Topbar from "./components/topbar";
import Heading from "./components/heading";
import Boxes from "./components/boxes";
import Widgets from "./components/widgets";

function App() {
  return (
    <div>
      <div>
        <Topbar />
        <Heading />
      </div>
      <div>
        <Boxes />
        <SideNavbar />
       <Widgets/>
      </div>
    </div>
  );
}
export default App;
