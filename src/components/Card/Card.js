import CardInfo from "./CardInfo";
import ProgressBar from "./ProgressBar";
import Percent from "./Percent";
import Members from "./Members";
import BottomWrapper from "./BottomWrapper";
import "./card.css"

function Card(props){
    let editButton="edit-btn"
    let dotMenu="dot-menu"
    let progressBar =""
    let memberIcons="member-icons"
    let memberText="members-text"
    let cardMembers="card-members"
    if(props.status == "Active" || props.status=="Inactive"){
        progressBar="card-progress"
    }else{
        progressBar="card-progress-2"
        dotMenu="dot-menu-onhold"
        memberIcons="member-icons-onhold"
        memberText="member-text-onhold"
        cardMembers="card-members-onhold"
        editButton = "edit-btn-onhold"
    }

    return (
        <div className={`${props.isOpen ? "card" : "cardClose"}`}>
            <CardInfo date={props.date} status={props.status} tasks={props.tasks}
            users={props.users} title={props.title}/>

            <img src={require("../Icons/Vector.png")} className={dotMenu}></img>
            <img src={require("../Icons/Edit.png")} className={editButton}></img>
            
            <BottomWrapper progressBar={progressBar} memberText={memberText} members={props.members}
            memberIcons={memberIcons} cardMembers={cardMembers} percent={props.percent}/>
           
        </div>
    )


}

export default Card;