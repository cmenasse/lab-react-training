import './CreditCard.css'
import visa from "../assets/images/visa.png"
import mastercard from "../assets/images/master-card.svg"

const CreditCard = (props) => {
  return (
    <div className="CreditCard" style={{backgroundColor: props.bgColor, color: props.color}}>
      <div className="bankLogo">
        {props.type === "Visa" ? <img src={visa} alt="bankLogo"/> : <img src={mastercard} alt="bankLogo"/>}
      </div>
      <div className="CardNumber">
      •••• •••• •••• {props.number.slice(-4)}
      </div>
      <div className="CardInfos">
      <div>
      Expires {('0' + props.expirationMonth).slice(-2)}/{('' + props.expirationYear).slice(-2)}    
      <span className="bankName"> {props.bank} </span>
      </div>
      {props.owner}
      </div>
    </div>
  )
}

export default CreditCard
