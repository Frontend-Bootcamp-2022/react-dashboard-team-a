import DATA from "../../DATA/api.json"
import Card from "./CardBox"
import CardTop from "./CardTop";
let date = new Date().toLocaleDateString('en-us', { day:"numeric", month:"long", year:"numeric" })
function Cards({isOpen}){

    return(
        <div className={`cards ${isOpen ? "cardOpen" : ""}`}>
        <CardTop />
        <div>
        {DATA.map((card) =>(
            <Card isOpen={isOpen} date={date} status={card.status} percent={card.progress} 
            tasks={card.tasks} users={card.users} members={card.members} title={card.title}/>
          ) )}
       </div></div>
    )
}

export default Cards;