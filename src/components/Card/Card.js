import CardInfo from "./CardInfo";
import ProgressBar from "./ProgressBar";
import Percent from "./Percent";

function Card(props){

    

    return (
        <div className="card">
            <CardInfo date={props.date}/>
        
            <div className="card-progress">
            <div className="card-members">
            +
            </div>
                <h4 className="progress-text">Progress<Percent /></h4>
                <div className="progress-bar-empty"></div>
                
                <ProgressBar />

            </div>
        </div>
    )


}

export default Card;