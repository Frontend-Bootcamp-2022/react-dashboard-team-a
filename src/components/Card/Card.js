import CardInfo from "./CardInfo";
import ProgressBar from "./ProgressBar";
import Percent from "./Percent";

function Card(props){

    let progressBar =""
    if(props.status == "Active" || props.status=="Inactive"){
        progressBar="card-progress"
    }else{
        progressBar="card-progress-2"
    }

    return (
        <div className="card">
            <CardInfo date={props.date} status={props.status} tasks={props.tasks}
            users={props.users}/>
        
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