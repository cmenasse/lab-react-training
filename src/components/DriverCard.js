import './DriverCard.css'
import Rating from './Rating'


const DriverCard = (props) => {

  return (
    <div className="DriverCard">
    <div className="driverImg">
      <img src={props.img} alt="driver"/>
    </div>
    <div className="driverInfos">
    <h2>{props.name}</h2>
    <Rating>{props.rating}</Rating>
    {props.car.model} - {props.car.licensePlate}
    </div>
    </div>

  )
}

export default DriverCard
