import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";

function App() {
  

  return (
    <div>
      <Header />
     {/* // this is the router component and will be resctict to the router generated in the main.jsx */}
      <Outlet />  
      
            
      
    </div>
  )
}

export default App;