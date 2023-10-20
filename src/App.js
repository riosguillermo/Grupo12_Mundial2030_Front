import "./App.css";
import SideNavbar from "./components/sideNavBar";
import Topbar from "./components/topbar";
import Heading from "./components/heading";
import Boxes from "./components/boxes";
import Widgets from "./components/widgets";

function App() {


  return (
    <div className="algo">
       <div> 
        <SideNavbar />
      </div>
      <div>
        <Topbar />
        <Heading />
        <Boxes/>
        <Widgets/>
      </div>
     
    </div>
  );
}
export default App;
