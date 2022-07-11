

function Members (props){


    return (

        <div className="members-section">
        {props.members.map((x) =>(
       <img src={x} className={props.memberIcons}></img>
       
       ) )}<div className={props.cardMembers}>+</div>
       
       </div>
       
    )


}

export default Members;