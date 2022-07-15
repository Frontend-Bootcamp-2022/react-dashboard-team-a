import Card from "./components/Card/Card"
import DATA from "./DATA/api.json"
import React,{useState} from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";


let date = new Date().toLocaleDateString('en-us', { day:"numeric", month:"long", year:"numeric" })


const App = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleTrigger = () => setIsOpen(!isOpen);
  return (
    <div>
      {DATA.map((card) =>(
        <Card date={date} status={card.status} percent={card.progress} 
        tasks={card.tasks} users={card.users} members={card.members} title={card.title}/>
      ) )}
     
 
      <Sidebar isOpen={isOpen} handleTrigger={handleTrigger} />
      <Header isOpen={isOpen}/>
     </div>
  );
};

export default App;
