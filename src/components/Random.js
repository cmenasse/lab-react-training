import './Random.css'

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const Random = ({max, min}) => {
  return (
    <div className='Random'>
    Random value between {min} and {max} => {randomNumber(min, max)}
    </div>
  )
}

export default Random
