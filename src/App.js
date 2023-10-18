import "./App.css";
import SideNavbar from "./components/sideNavBar";
import Topbar from "./components/topbar"
import Heading from "./components/heading"

function App() {
  return (
    <div>
      <Topbar />
      <Heading />
      <SideNavbar />
    </div>
  );
}
export default App;