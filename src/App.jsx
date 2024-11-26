import './App.css'
import Lottery from './Lottery';
import Ticket from './Ticket';
import { sum } from './helper';

function App() {

  let winCondition = (ticket) => {  //Specfic total sum of ticket numbers
    return sum(ticket) === 15; 
  }

  // let winCondition = (ticket) => {  //Specific index number should be zero or something
  //   return ticket[0] === 0;
  // }
  
  // let winCondition = (ticket) => {  //Every number should be same
  //   return ticket.every((num) => num === ticket[0])
  // }

  return (
    <div>
      <Lottery n={2} winCondition={winCondition}/>
    </div>
  );
}

export default App
