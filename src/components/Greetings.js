import './Greetings.css'

function renderSwitch(param) {
  switch(param) {
    case 'fr':
      return 'Bonjour';
    case 'de':
      return 'Hallo';
    case 'es':
      return 'Holà';
    case 'en':
      return 'Hello';
    default:
      return 'Hello';
  }
}

const Greetings = (props) => {
  return (
    <div className='Greetings'>
    <p>{renderSwitch(props.lang)} {props.children}</p>
    </div>
  )
}

export default Greetings
