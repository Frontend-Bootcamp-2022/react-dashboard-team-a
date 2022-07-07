import React from "react";




function CardInfo(props){
    let className = ""
    let status=""
    if(props.status =="On Hold"){
        className = "on-hold"
        status="Status"
    }else if (props.status=="Active"){
    className="active"
    
    }else{
        className="inactive"
        
    }

    return (

        <div className="card-info">
            <div className="card-heading">
                <h2> Project Title goes here</h2>
            </div>

            <div className="card-stats">
                <h4 className="started">Started</h4>
                <p className="started-date">{props.date}</p>
                <h4 className="status" >{status}</h4>
                <ul>
                    <li className={className}>{props.status}</li>
                </ul>
            </div>

            <div className="card-data">
                <div className="data-info-1">
                <h2 className="data-number">14</h2>
                <p className="data-text">Tasks</p>
                </div>

                <div className="vertical-line"></div>
                    <div className="data-info-2">
                        <h2 className="data-number">4</h2>
                        <p className="data-text">Users</p>
                    </div>
                </div>
   
            </div>


    )

}

export default CardInfo;