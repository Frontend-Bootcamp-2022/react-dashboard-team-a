


function Status(props){



    return(
            <div>
            <div className={props.statusDot}></div>
     
            <h2 className={props.className}>{props.status}</h2>
            </div>
            
            
            )
}

export default Status;