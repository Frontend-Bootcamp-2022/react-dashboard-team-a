import Card from "./components/Card/Card"
import "./style.css"
import "./fonts/Roboto-Regular.ttf"

let date = new Date().toLocaleDateString('en-us', { day:"numeric", month:"long", year:"numeric" })


const App = () => {
  return (
    <div>
       <h1>React Dashboard</h1>
       <Card date={date}/>
       <Card date={date}/>
       <Card date={date}/>
       <Card date={date}/>
       <Card date={date}/>
       <Card date={date}/>
       <Card date={date}/>
       <Card date={date}/>
       <Card date={date}/>
    </div>
   
  );
}

export default App;
