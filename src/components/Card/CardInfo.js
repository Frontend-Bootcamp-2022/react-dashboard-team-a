import Title from "./CardTitle";
import Info from "./CardDate/CardDateBox";

function CardInfo(props) {
  let className = "";
  let status = "";
  let infoStatus = "card-info-2";
  let statusDot = "status-dot";
  let cardData = "card-data";
  if (props.status === "On Hold") {
    className = "on-hold";
    status = "Status";
    infoStatus = "card-info";
    statusDot = "status-dot-onhold";
    cardData = "card-data-onhold";
  } else if (props.status === "Active") {
    className = "active";
    statusDot = "status-dot-active";
  } else {
    className = "inactive";
  }

  return (
    <div>
      <Title title={props.title} />

      <Info
        date={props.date}
        status={props.status}
        statusDot={statusDot}
        className={className}
        cardData={cardData}
        tasks={props.tasks}
        users={props.users}
        infoStatus={infoStatus}
        statusText={status}
      />
    </div>
  );
}

export default CardInfo;
