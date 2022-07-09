import Card from "./components/Card/Card"
import DATA from "./DATA/api.json"
import "./style.css"
import "./fonts/Roboto-Regular.ttf"



let date = new Date().toLocaleDateString('en-us', { day:"numeric", month:"long", year:"numeric" })
console.log(DATA.status)



const App = () => {
  return (
    <div>
       <h1>React Dashboard</h1>
      {DATA.map((x) =>(
        <Card date={date} status={x.status} percent={x.progress} 
        tasks={x.tasks} users={x.users} members={x.members}/>
      ) )}
     
    </div>
   
  );
}

export default App;
