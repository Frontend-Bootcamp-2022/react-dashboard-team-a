import CardInfo from "./CardInfo";
import ProgressBar from "./ProgressBar";
import Percent from "./Percent";

function Card(props){
    let dotMenu="dot-menu"
    let progressBar =""
    if(props.status == "Active" || props.status=="Inactive"){
        progressBar="card-progress"
    }else{
        progressBar="card-progress-2"
        dotMenu="dot-menu-onhold"
    }

    return (
        <div className="card">
            <CardInfo date={props.date} status={props.status} tasks={props.tasks}
            users={props.users}/>
            <img src={require("./Icons/Vector.png")} className={dotMenu}></img>
            <div className={progressBar}>
            <div className="card-members">
            +
            </div>
                <h4 className="progress-text">Progress<Percent percent={props.percent}/></h4>
                <div className="progress-bar-empty"></div>
                
                <ProgressBar percent={props.percent}/>

            </div>
        </div>
    )


}

export default Card;