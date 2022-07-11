

function Data(props){


    return (

        <div className={props.cardData}>
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


    )

}


export default Data;