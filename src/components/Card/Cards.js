import DATA from "../../DATA/api.json"
import Card from "./Card"
let date = new Date().toLocaleDateString('en-us', { day:"numeric", month:"long", year:"numeric" })
function Cards({isOpen}){

    return(
        <div className={`cards ${isOpen ? "cardOpen" : ""}`}>
        {DATA.map((card) =>(
            <Card isOpen={isOpen} date={date} status={card.status} percent={card.progress} 
            tasks={card.tasks} users={card.users} members={card.members} title={card.title}/>
          ) )}
       </div>
    )
}

export default Cards;