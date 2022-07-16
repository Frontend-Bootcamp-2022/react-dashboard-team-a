import Members from "./CardBottomMembers";
import ProgressBar from "./CardBottomProgressBar";
import Percent from "./CardBottomPercent";

function BottomWrapper(props){
    
    return (
        <div className={props.progressBar}>

            <h2 className={props.memberText}>Members</h2>

            <Members members={props.members} memberIcons={props.memberIcons} cardMembers={props.cardMembers}/>
           <h4 className="progress-text">Progress<Percent percent={props.percent}/></h4>
           <div className="progress-bar-empty">
           
           <ProgressBar percent={props.percent}/>
           </div>
       </div>
    )
}

export default BottomWrapper;