




function CardInfo(props){
    let className = ""
    let status=""
    let infoStatus="card-info-2";
    let statusDot="status-dot"
    let cardData="card-data"
    if(props.status =="On Hold"){
        className = "on-hold"
        status="Status"
        infoStatus="card-info"
        statusDot="status-dot-onhold"
        cardData="card-data-onhold"
    }else if (props.status=="Active"){
    className="active"
    statusDot="status-dot-active"
    
    }else{
        className="inactive"
        
    }
    

    return (

    <div>
            <div className="card-heading">
                <h2> Project Title goes here</h2>
            </div>

         <div className={infoStatus}>
            <div className="card-stats">
                <h4 className="started">Started</h4>
                <p className="started-date">{props.date}</p>
                <h4 className="status" >{status}</h4>


                <div className={statusDot}></div>
             
                    <h2 className={className}>{props.status}</h2>
                
            </div>

            <div className={cardData}>
                <div className="data-info-1">
                <h2 className="data-number">{props.tasks}</h2>
                <p className="data-text">Tasks</p>
                </div>

                <div className="vertical-line"></div>
                    <div className="data-info-2">
                        <h2 className="data-number">{props.users}</h2>
                        <p className="data-text">Users</p>
                    </div>
                </div>
   
            </div>
    </div>


)

}

export default CardInfo;