import './Rating.css'

const Rating = (props) => {
  let stars = [0, 0, 0, 0, 0];
  for (let i = 0; i <= Number(props.children) - 1 + .1; i++)
    stars[i] = 1;
  return (
    <div className='Rating'>
    {stars.map(x => x?"★":"☆")}
    </div>
  )
}

export default Rating
