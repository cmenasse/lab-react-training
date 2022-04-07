import './IdCard.css'

const IdCard = ({
  lastName,
  firstName,
  gender,
  height,
  birth,
  picture
}) => {

  return (
    <div className="IdCard">
    <div>
      <img src={picture} alt="profile"/>
    </div>
    <div className="UserInfos">
      <ul>
        <li><strong>First name:</strong> {firstName}</li>
        <li><strong>Last name:</strong> {lastName}</li>
        <li><strong>Gender:</strong> {gender}</li>
        <li><strong>Height:</strong> {height}</li>
        <li><strong>Birth:</strong> {birth.toLocaleDateString('en-US', {weekday: 'short', day: '2-digit', month: 'short', year: 'numeric'}).replaceAll(',','')}</li>
      </ul>    
    </div>
    </div>
  )
}

export default IdCard
