import Status from "./Status";


function Stats(props){


    return (

        <div className="card-stats">
        <h4 className="started">Started</h4>
        <p className="started-date">{props.date}</p>
        <h4 className="status" >{props.statusText}</h4>


        <Status statusDot={props.statusDot} className={props.className} status={props.status}/>
        
    </div>

    )


}

export default Stats;