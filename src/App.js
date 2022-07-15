import Cards from "./components/Card/Cards"
import DATA from "./DATA/api.json"
import React,{useState} from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";





const App = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleTrigger = () => setIsOpen(!isOpen);
  return (
    <div>
    <Sidebar isOpen={isOpen} handleTrigger={handleTrigger} />
    <Header isOpen={isOpen}/>
    <Cards isOpen={isOpen}/>
     
 
     </div>
  );
};

export default App;
