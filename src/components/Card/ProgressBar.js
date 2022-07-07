

function ProgressBar(props){
    let status = ""
if (props.percent >= 60 && props.percent <= 70){
    status = "progress-bar-67"
}else if(props.percent >= 29 && props.percent <= 35){
    status="progress-bar-32"
}else if(props.percent >= 5 && props.percent <= 10){
    status="progress-bar-7"
}else if(props.percent >= 95 && props.percent <= 100){
    status="progress-bar-97"
}else if(props.percent >= 1 && props.percent <= 4){
    status="progress-bar-3"
}else if(props.percent >= 25 && props.percent <= 28){
    status="progress-bar-28"
}
    return (

        <div className={status}>
                    
        </div>

    )

}

export default ProgressBar;