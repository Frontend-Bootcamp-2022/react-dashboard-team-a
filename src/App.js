import Card from "./components/Card/Card"
import DATA from "./DATA/api.json"



let date = new Date().toLocaleDateString('en-us', { day:"numeric", month:"long", year:"numeric" })

const App = () => {
  return (
    <div>
      {DATA.map((card) =>(
        <Card date={date} status={card.status} percent={card.progress} 
        tasks={card.tasks} users={card.users} members={card.members} title={card.title}/>
      ) )}
     
    </div>
   
  )
}

export default App;
